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
    </UniverseBox>
  );
};

export default GeneratedPlanetImage;
