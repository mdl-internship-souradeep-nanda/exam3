import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import store from '../../store';
import refreshAction from '../../Actions/RefreshAction';

import externals from '../../externals.json';

import favouriteIcon from './favourite.svg';

function Card(props) {
  const toggleLike = () => {
    if (props.likes === 1) {
      fetch(`${externals.unlike}${props.id}`).then(() => {
        store.dispatch(refreshAction());
      });
    } else {
      fetch(`${externals.like}${props.id}`).then(() => {
        store.dispatch(refreshAction());
      });
    }
  };
  const getFavButton = () => (
    <button
      className={props.likes === 1 ? 'Card-fav-button red' : 'Card-fav-button grey'}
      onClick={toggleLike}
    >
      <img
        className={props.likes === 1 ? 'Card-fav-icon red' : 'Card-fav-icon grey'}
        src={favouriteIcon}
        alt="favourite"
      />

    </button>
  );

  return (
    <div className="Card">
      <div className="Card-base-wrapper">
        <img className="Card-img" src={externals.imgUrl} alt="card" />

        <div className="Card-info-wrapper">
          <div className="Card-name">
            {props.name}
          </div>
          <div className="Card-rating">
            {props.rating}
          </div>
          <div className="Card-author">
            {props.author}
          </div>
        </div>
      </div>
      <div className="Card-fav-button-wrapper">
        {getFavButton()}
      </div>
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
