import style from './style.module.scss';
const PlanetsTable = ({ planets }) => {
  const planetsByReleasedate = [...planets].sort(
    (a, b) => new Date(b.releasedate) - new Date(a.releasedate),
  );

  // TODO - find different unique (stable) value to replace index as key below
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

export default PlanetsTable;
