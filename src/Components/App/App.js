import React from 'react';
import './App.css';

import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import NoBooksFound from '../NoBooksFound/NoBooksFound';
import BooksPage from '../BooksPage/BooksPage';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <NoBooksFound />
      <BooksPage />
    </div>
  );
}

export default App;
