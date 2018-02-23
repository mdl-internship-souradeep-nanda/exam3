import React from 'react';
import PropTypes from 'prop-types';

import './BooksPage.css';
import AuthorGroup from '../AuthorGroup/AuthorGroup';

function BooksPage(props) {
  const populateAuthorGroup = () => {
    const { groupedBooks } = props;
    return Object
      .keys(groupedBooks)
      .sort((a, b) => a.localeCompare(b))
      .map((author) => {
        const myKey = `key_${author}`;
        return (
          <AuthorGroup
            key={myKey}
            author={author}
            books={groupedBooks[author]}
          />
        );
      });
  };
  return (
    <div className="BooksPage">
      {populateAuthorGroup()}
    </div>
  );
}

BooksPage.propTypes = {
  groupedBooks: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default BooksPage;
