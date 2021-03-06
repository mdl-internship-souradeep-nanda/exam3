import React from 'react';
import PropTypes from 'prop-types';

import './AuthorGroup.css';

import Card from '../Card/Card';

import externals from '../../externals.json';

function AuthorGroup(props) {
  const populateCards = () => {
    const { books } = props;
    return books
      .sort((a, b) => a.id - b.id)
      .map((book) => {
        const myKey = `book_${book.id}`;
        return (
          <Card
            id={book.id}
            key={myKey}
            imgUrl={externals.imgurl}
            author={book.author}
            name={book.name}
            rating={book.rating}
            likes={book.likes ? 1 : 0}
          />
        );
      });
  };
  return (
    <div className="AuthorGroup">
      <div className="AuthorGroup-header">
        {props.author}
      </div>
      <div className="AuthorGroup-body">
        {populateCards()}
      </div>
    </div>
  );
}

AuthorGroup.propTypes = {
  books: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  author: PropTypes.string.isRequired,
};

export default AuthorGroup;
