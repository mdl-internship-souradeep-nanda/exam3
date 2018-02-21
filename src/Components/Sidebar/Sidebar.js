import React from 'react';
import './Sidebar.css';

import refreshImg from '../SharedMedia/refresh.svg';
import gearImg from './gear.svg';

import store from '../../store';
import refresh from '../../Actions/RefreshAction';

function Sidebar() {
  const onRefreshClick = () => {
    store.dispatch(refresh());
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar-inner">
        <div className="Sidebar-header">
          Bs
        </div>
        <button
          className="Sidebar-button-refresh"
          onClick={onRefreshClick}
        >
          <img
            className="Sidebar-refresh-img"
            src={refreshImg}
            alt="refresh"
          />
        </button>
        <button
          className="Sidebar-button-settings"
          onClick={onRefreshClick}
        >
          <img
            className="Sidebar-settings-img"
            src={gearImg}
            alt="settings"
          />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
