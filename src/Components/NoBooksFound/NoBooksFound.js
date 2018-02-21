import React from 'react';
import './NoBooksFound.css';

import externals from '../../externals.json';

import refreshImg from '../SharedMedia/refresh.svg';

import store from '../../store';
import refresh from '../../Actions/RefreshAction';

function NoBooksFound() {
  const importBooks = () => {
    fetch(externals.populateDb).then(() => {
      store.dispatch(refresh());
    });
  };
  return (
    <div className="NoBooksFound">
      <div className="NoBooksFound-text">
        Oops! No books found!
      </div>
      <div className="NoBooksFound-text">
        Import them now ?
      </div>
      <button
        className="NoBooksFound-refresh-button"
        onClick={importBooks}
      >
        <img
          className="NoBooksFound-refresh-img"
          src={refreshImg}
          alt="refresh"
        />
      </button>
    </div>
  );
}

export default NoBooksFound;
