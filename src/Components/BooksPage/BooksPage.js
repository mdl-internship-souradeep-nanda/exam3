import React from 'react';
import './BooksPage.css';
import AuthorGroup from '../AuthorGroup/AuthorGroup';

function BooksPage(props) {
  const populateAuthorGroup = () => {
    const { groupedBooks } = props;
    return Object.keys(groupedBooks).map((author) => {
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

export default BooksPage;
