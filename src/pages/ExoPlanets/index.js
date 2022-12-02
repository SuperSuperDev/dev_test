import { useEffect, useState } from 'react';
import { getExoPlanets } from '../../lib/api';
import style from './style.module.scss';
import PlanetsTable from '../../components/PlanetsTable';
import PlanetsGrid from '../../components/PlanetsGrid';

const ExoPlanets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await getExoPlanets();
        setPlanets(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPlanets();
  }, []);
  console.log('planets', planets);

  return (
    <div className={`container-sm ${style.main}`}>
      <h1>Exoplanets</h1>
      <PlanetsGrid planets={planets} />
      <PlanetsTable planets={planets} />
    </div>
  );
};

export default ExoPlanets;
