import { useEffect, useState } from 'react';
import { getExoPlanets } from '../../lib/api';
import style from './style.module.scss';
import {
  reverseString,
  stringToColorHSL,
  stringToDegree,
} from '../../lib/helpers';

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
      <Grid planets={planets} />
      <Table planets={planets} />
    </div>
  );
};

export default ExoPlanets;

const Table = ({ planets }) => {
  const planetsByReleasedate = [...planets].sort(
    (a, b) => new Date(b.releasedate) - new Date(a.releasedate),
  );

  // TODO - find different unique (stable) value for key in planets.map below
  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th className={style.sticky} scope="col">
            Planet Name
          </th>
          <th className={style.sticky} scope="col">
            Release Date
          </th>
          <th className={style.sticky} scope="col">
            Planet Radius (earth Units)
          </th>
          <th className={style.sticky} scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {planetsByReleasedate.map(
          ({ pl_name, releasedate, pl_rade }, index) => (
            <tr key={index}>
              <th scope="row">{pl_name}</th>
              <td>{releasedate}</td>
              <td>{pl_rade}</td>
              <td>
                <button className="btn btn-dark">View</button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

const Grid = ({ planets }) => {
  const planetsByReleasedate = [...planets].sort(
    (a, b) => new Date(b.releasedate) - new Date(a.releasedate),
  );
  return (
    <div className="row">
      {planetsByReleasedate.map(({ pl_name, releasedate, pl_rade }) => (
        <div className="col-sm-4">
          <div className="card">
            <GeneratedPlanetImage pl_name={pl_name} />
            <div className="card-body">
              <h5 className="card-title">{pl_name}</h5>
              <p className="card-text">
                <strong>Release Date:</strong> {releasedate}
              </p>
              <p className="card-text">
                <strong>Planet Radius (earth Units):</strong> {pl_rade}
              </p>
              <a href="#" className="btn btn-dark">
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const GeneratedPlanetImage = ({ pl_name }) => {
  const colorA = stringToColorHSL(pl_name);
  const colorB = stringToColorHSL(reverseString(pl_name));
  const deg = stringToDegree(pl_name);

  return (
    <div
      className={style.space}
      style={{
        backgroundColor: '#000000',
        color: 'rgb(138, 138, 138)',
        padding: '2rem',
        width: '100%',
      }}>
      <span className={style.planetName}>{pl_name}</span>
      {/*height same as width */}
      <div
        className={style.planet}
        style={{
          background: `linear-gradient(${deg}deg, ${colorA}, ${colorB})`,
          width: '200px',
          height: '200px',

          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '50%',
          borderColor: 'hsl(243, 32.8%, 23.9%)',
          borderStyle: 'solid',
          borderWidth: '1px',
          boxShadow: 'hsl(0, 11.4%, 34.5%) 2px 2px 10px',
          margin: '0 auto',
        }}></div>
      <br />
      <small>Hypothetical Image</small>
    </div>
  );
};
