import { memo } from 'react';
import { VscTable } from 'react-icons/vsc';
import { MdGridView } from 'react-icons/md';
import style from './style.module.scss';
const SearchBar = memo(
  ({ handleInputChange, handleViewChange, activeView }) => {
    return (
      <nav className="navbar navbar-light bg-dark">
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
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group">
            <form className="d-flex">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                checked={activeView === 'table'}
                value={'table'}
                onChange={handleViewChange}
              />
              <label
                className={`btn btn-dark ${style.viewbutton}`}
                htmlFor="btnradio1">
                <VscTable
                  size={24}
                  color={activeView === 'table' ? 'rgb(44, 149, 217)' : 'white'}
                />
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                checked={activeView === 'grid'}
                value={'grid'}
                onChange={handleViewChange}
              />
              <label
                className={`btn btn-dark ${style.viewbutton}`}
                htmlFor="btnradio2">
                <MdGridView
                  size={24}
                  color={activeView === 'grid' ? 'rgb(44, 149, 217)' : 'white'}
                />
              </label>
            </form>
          </div>
        </div>
      </nav>
    );
  },
);

export default SearchBar;
