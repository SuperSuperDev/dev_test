import PlanetCard from '../PlanetCard';

const PlanetsGrid = ({ planets }) => {
  const planetsByReleasedate = [...planets].sort(
    (a, b) => new Date(b.releasedate) - new Date(a.releasedate),
  );
  return (
    <div className="row gy-3">
      {planetsByReleasedate.map(({ pl_name, releasedate, pl_rade }) => (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <PlanetCard
            pl_name={pl_name}
            releasedate={releasedate}
            pl_rade={pl_rade}
          />
        </div>
      ))}
    </div>
  );
};

export default PlanetsGrid;
