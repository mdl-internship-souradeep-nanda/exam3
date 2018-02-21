import React from 'react';
import './App.css';

import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import NoBooksFound from '../NoBooksFound/NoBooksFound';
import BooksPage from '../BooksPage/BooksPage';

import externals from '../../externals.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupedBooks: [],
    };
  }

  componentDidMount() {
    fetch(externals.fetch)
      .then((res) => {
        res.json()
          .then((groupedBooks) => {
            this.setState({ groupedBooks });
          });
      });
  }

  render() {
    let centralJsx = null;

    // If returned data is empty, render NoBooksFound
    if (Object.keys(this.state.groupedBooks).length === 0) {
      centralJsx = (<NoBooksFound />);
    } else {
      centralJsx = (
        <BooksPage
          groupedBooks={this.state.groupedBooks}
        />
      );
    }
    return (
      <div className="App">
        <Header />
        <SideBar />
        {centralJsx}
      </div>
    );
  }
}

export default App;
