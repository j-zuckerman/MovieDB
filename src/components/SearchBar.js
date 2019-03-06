import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchResults } from '../actions';
import '../styles/poster.css';
import '../styles/searchbar.css';
import { connect } from 'react-redux';

class SearchBar extends Component {
  handleSearchinput = e => {
    this.props.fetchSearchResults(e.target.value);
  };
  render() {
    console.log(this.props);
    return (
      <div className="search-wrapper">
        <form className="row">
          <input
            className="button"
            onChange={this.handleSearchinput}
            type="text"
            aria-label="Search"
            placeholder="Search..."
          />
          <Link
            to={`/search/results/${this.props.search}`}
            className="button"
            style={{
              textAlign: 'center',
              lineHeight: '75px',
              textDecoration: 'none'
            }}
          >
            Search
          </Link>
        </form>
        <div className="dropdown">
          <ul className="result">
            {this.props.search.searchResults === null
              ? ''
              : this.props.search.searchResults
                  .filter(
                    el => el.media_type === 'tv' || el.media_type === 'movie'
                  )
                  .map((el, index) => (
                    <li key={el.id}>
                      {el.media_type === 'tv' ? el.name : el.title}
                    </li>
                  ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { search: state.movie };
};
export default connect(
  mapStateToProps,
  { fetchSearchResults }
)(SearchBar);
