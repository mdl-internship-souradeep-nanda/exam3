import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      {props.author} <br />
      {props.name} <br />
      {props.rating} <br />
      {props.likes === 1 ? 'YAY' : 'NAY'} <br />
    </div>
  );
}

export default Card;
