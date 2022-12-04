import { Link } from 'react-router-dom';
import { kelvinToCelsius, planetRadiustoMiles } from '../../lib/helpers';
import AnimatedPlanet from '../AnimatedPlanet';
import UniverseBox from '../UniverseBox';
import style from './style.module.scss';

const PlanetCardHorizontal = ({
  pl_name,
  releasedate,
  pl_rade,
  hostname,
  pl_refname,
  pl_orbper,
  pl_bmasse,
  pl_eqt,
  soltype,
}) => {
  return (
    <div className="card text-white bg-transparent mb-3">
      <div className="row g-0">
        <div className={`col-md-4 ${style.wrapper}`}>
          <AnimatedPlanet pl_name={pl_name} pl_rade={pl_rade} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Planet: {pl_name}</h1>
            <div className="row">
              <div className="col-md-4">
                <dl>
                  <dt>Host Star</dt>
                  <dd>{hostname || '-'}</dd>
                  <dt>Planet Orbital Period:</dt>
                  <dd>{pl_orbper || '-'} Days</dd>
                  <dt>Planet Radius:</dt>
                  <dd>{pl_rade || '-'} Earth Radii</dd>
                  <dd>({planetRadiustoMiles(pl_rade)} Miles)</dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl>
                  <dt>Planet Mass:</dt>
                  <dd>{pl_bmasse || '-'} Earth Masses</dd>
                  <dt>
                    Planet Equilibrium <br />
                    Temperature:
                  </dt>
                  <dd>{pl_eqt || '-'} Kelvin</dd>
                  <dd>({kelvinToCelsius(pl_eqt)} °C)</dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl>
                  <dt>Status:</dt>
                  <dd>{soltype || '-'}</dd>
                  <dt>Release Date:</dt>
                  <dd>{releasedate || '-'}</dd>
                  <dt>Reference</dt>
                  <dd
                    dangerouslySetInnerHTML={{
                      __html: pl_refname || '-',
                    }}
                  />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCardHorizontal;
