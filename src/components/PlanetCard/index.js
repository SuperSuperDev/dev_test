import AnimatedPlanet from '../AnimatedPlanet';
import GeneratedPlanetImage from '../GeneratedPlanetImage';
import UniverseBox from '../UniverseBox';

const PlanetCard = ({ pl_name, releasedate, pl_rade }) => {
  return (
    <div className="card overflow-hidden">
      {/* <GeneratedPlanetImage pl_name={pl_name} /> */}
      <UniverseBox>
        <AnimatedPlanet pl_name={pl_name} pl_rade={pl_rade} />
      </UniverseBox>
      <div className="card-body">
        <h5 className="card-title">{pl_name}</h5>
        <p className="card-text">
          <strong>Release Date:</strong> {releasedate}
        </p>
        <p className="card-text">
          <strong>Planet Radius (earth units):</strong> {pl_rade}
        </p>
        <a href="#" className="btn btn-dark">
          View
        </a>
      </div>
    </div>
  );
};

export default PlanetCard;
