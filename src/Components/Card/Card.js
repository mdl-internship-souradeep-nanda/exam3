import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Card;
