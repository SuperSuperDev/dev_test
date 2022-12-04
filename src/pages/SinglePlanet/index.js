import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlanetCardHorizontal from '../../components/PlanetCardHorizonal';
import SystemCardHorizontal from '../../components/SystemCardHorizonal';
import PlanetsTable from '../../components/PlanetsTable';
import UniverseBox from '../../components/UniverseBox';

import { getExoPlanets } from '../../lib/api';

import style from './style.module.scss';

const SinglePlanet = () => {
  const { pl_name } = useParams();
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const defaultPlanet = planet?.find((p) => p.default_flag === 1) || planet[0];

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const { data } = await getExoPlanets();
        const planetData = data.filter((planet) => planet.pl_name === pl_name);
        setPlanet(planetData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    getPlanet();
  }, [pl_name]);

  return (
    <div className={style.main}>
      <UniverseBox>
        <div className={`container-sm ${style.wrapper}`}>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Something went wrong...</h1>
          ) : (
            <>
              <PlanetCardHorizontal
                speedX={0.0003}
                speedY={0.005}
                hoverSpeedX={0}
                hoverSpeedY={0}
                {...defaultPlanet}
              />
              <SystemCardHorizontal {...defaultPlanet} />
            </>
          )}

          <div className={`container-sm ${style.content}`}>
            <h1>Exoplanets</h1>
            <PlanetsTable planets={planet} />
          </div>
        </div>
      </UniverseBox>
    </div>
  );
};

export default SinglePlanet;
