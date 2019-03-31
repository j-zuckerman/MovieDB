import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';

class SearchBar extends Component {
  state = {
    searchValue: ''
  };
  handleSearchinput = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <div className="search-container">
        <form action={`/search/results/${this.state.searchValue}`}>
          <input onChange={this.handleSearchinput} type="search" />
          <Link to={`/search/results/${this.state.searchValue}`}>
            <i className="fa fa-search" />
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
