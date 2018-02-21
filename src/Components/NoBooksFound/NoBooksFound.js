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
      <div>
        Oops! No books found!
      </div>
      <div>
        Import them now ?
      </div>
      <button
        onClick={importBooks}
      >
        <img src={refreshImg} alt="refresh" />
      </button>
    </div>
  );
}

export default NoBooksFound;
