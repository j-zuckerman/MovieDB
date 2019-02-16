import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
class Navbar extends Component {
  state = {
    searchValue: ''
  };

  handleSearchinput = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <nav className="main-nav">
        <form className="form-inline search-bar">
          <input
            className="form-control mr-sm-2"
            onChange={this.handleSearchinput}
            type="text"
            aria-label="Search"
            placeholder="Search.."
          />
          <Link to={`/search/results/${this.state.searchValue}`}>
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </Link>
        </form>
      </nav>
    );
  }
}

export default Navbar;
