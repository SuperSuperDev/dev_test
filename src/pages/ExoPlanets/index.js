import { useCallback, useEffect, useState } from 'react';
import { getExoPlanets } from '../../lib/api';
import style from './style.module.scss';
import PlanetsTable from '../../components/PlanetsTable';
import PlanetsGrid from '../../components/PlanetsGrid';
import SearchBar from '../../components/SearchBar';

const ExoPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('table');
  console.log('activeView :', activeView);
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

  const filteredPlanets = planets.filter((planet) => {
    return planet.pl_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewChange = useCallback((event) => {
    console.log('event.target.value :', event.target.value);
    setActiveView(event.target.value);
  }, []);

  return (
    <>
      <div className={`container-sm ${style.main}`}>
        <h1>Exoplanets</h1>
      </div>
      <div className={`container-sm ${style.main}`}>
        <SearchBar
          handleInputChange={handleInputChange}
          handleViewChange={handleViewChange}
          activeView={activeView}
        />
      </div>
      <div
        className={`container-sm ${style.main} ${
          activeView !== 'table' && style.hidden
        }`}>
        <PlanetsTable planets={filteredPlanets} />
      </div>
      <div
        className={`container-sm ${style.main} ${
          activeView !== 'grid' && style.hidden
        }`}>
        <PlanetsGrid planets={filteredPlanets} />
      </div>
    </>
  );
};

export default ExoPlanets;
