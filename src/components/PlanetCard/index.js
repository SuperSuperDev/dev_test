import { Link } from 'react-router-dom';
import AnimatedPlanet from '../AnimatedPlanet';
import UniverseBox from '../UniverseBox';

const PlanetCard = ({ pl_name, releasedate, pl_rade }) => {
  return (
    <div className="card overflow-hidden">
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
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to={`/exoplanets/${pl_name}`} className="btn btn-dark">
            Visit Planet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
