import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <Link to="/favorites" className="link">
          favorites
        </Link>
        <Link to="/watchlist" className="link">
          watchlist
        </Link>
        <div className="end">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default TopMenu;
