import { useEffect, useState } from 'react';
import { getExoPlanets } from '../../lib/api';
import style from './style.module.scss';
import PlanetsTable from '../../components/PlanetsTable';
import PlanetsGrid from '../../components/PlanetsGrid';

const ExoPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredPlanets = planets.filter((planet) => {
    return planet.pl_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={`container-sm ${style.main}`}>
        <h1>Exoplanets</h1>
      </div>
      <div className={`container-sm ${style.main}`}>
        <SearchBar handleInputChange={handleInputChange} />
      </div>
      <div className={`container-sm ${style.main}`}>
        <PlanetsGrid planets={filteredPlanets} />
      </div>
      <div className={`container-sm ${style.main}`}>
        <PlanetsTable planets={filteredPlanets} />
      </div>
    </>
  );
};

export default ExoPlanets;

const SearchBar = ({ handleInputChange }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search for a planet..."
            aria-label="Search"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </nav>
  );
};
