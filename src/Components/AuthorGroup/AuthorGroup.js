import React from 'react';
import './AuthorGroup.css';

import Card from '../Card/Card';

import externals from '../../externals.json';

function AuthorGroup(props) {
  const populateCards = () => {
    const { books } = props;
    return books.map((book) => {
      const myKey = `book_${book.id}`;
      return (
        <Card
          id={book.id}
          key={myKey}
          imgUrl={externals.imgurl}
          author={book.author}
          name={book.name}
          rating={book.rating}
          likes={book.likes}
        />
      );
    });
  };
  return (
    <div className="AuthorGroup">
      <h1>{props.author}</h1>
      {populateCards()}
    </div>
  );
}

export default AuthorGroup;
