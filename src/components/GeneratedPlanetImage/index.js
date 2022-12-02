import {
  reverseString,
  stringToColorHSL,
  stringToDegree,
} from '../../lib/helpers';
import UniverseBox from '../UniverseBox';
import style from './style.module.scss';

const GeneratedPlanetImage = ({ pl_name }) => {
  const colorA = stringToColorHSL(pl_name);
  const colorB = stringToColorHSL(reverseString(pl_name));
  const deg = stringToDegree(pl_name);

  return (
    <UniverseBox>
      <span className={style.planetName}>{pl_name}</span>
      <div
        className={style.planet}
        style={{
          background: `linear-gradient(${deg}deg, ${colorA}, ${colorB})`,
        }}></div>
      <br />
      <small>Hypothetical Image</small>
    </UniverseBox>
  );
};

export default GeneratedPlanetImage;
