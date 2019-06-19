import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class TopMenu extends Component {
  render() {
    return (
      <div className="top_menu">
        <SearchBar />
        <Link to="/favorites">
          <button className="top-button">favorite movies</button>
        </Link>
        <Link to="/watchlist">
          <button className="top-button">Watchlist</button>
        </Link>
      </div>
    );
  }
}

export default TopMenu;
