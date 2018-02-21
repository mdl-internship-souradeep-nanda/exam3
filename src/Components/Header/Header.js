import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <span className="Header-small">The</span>
      {' Book '}
      <span className="Header-small">Shelf</span>
      <hr className="Header-line" />
    </div>
  );
}

export default Header;
