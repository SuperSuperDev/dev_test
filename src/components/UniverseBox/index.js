import style from './style.module.scss';

const UniverseBox = ({ children }) => (
  <div className={style.main}>
    <div className={style.stars}>
      <div className={style.twinkling}>{children}</div>
    </div>
  </div>
);

export default UniverseBox;
