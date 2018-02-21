import React from 'react';
import './Card.css';

import store from '../../store';
import refreshAction from '../../Actions/RefreshAction';

import externals from '../../externals.json';


function Card(props) {
  const toggleLike = () => {
    if (props.likes === 1) {
      fetch(`${externals.unlike}${props.id}`);
    } else {
      fetch(`${externals.like}${props.id}`);
    }
    store.dispatch(refreshAction());
  };
  const getFavButton = () => (
    <button onClick={toggleLike}>
      {props.likes === 1 ? 'YAY' : 'NAY'}
    </button>
  );

  return (
    <div className="Card">
      {props.author} <br />
      {props.name} <br />
      {props.rating} <br />
      {getFavButton()}<br />
    </div>
  );
}

export default Card;
