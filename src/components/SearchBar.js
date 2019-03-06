import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchResults } from '../actions';
import '../styles/poster.css';
import '../styles/searchbar.css';
import { connect } from 'react-redux';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w92/';

class SearchBar extends Component {
  state = {
    searchValue: ''
  };
  handleSearchinput = e => {
    this.props.fetchSearchResults(e.target.value);
    this.setState({ searchValue: e.target.value });
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
            to={`/search/results/${this.state.searchValue}`}
            className="link"
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
                  .filter((el, index) => index < 5)
                  .map((el, index) => (
                    <Link
                      className="search-link"
                      to={el.media_type + '/details/' + el.id}
                    >
                      <li key={el.id}>
                        <img
                          src={`${baseImageURLPoster}${el.poster_path}`}
                          alt="poster"
                        />
                        {el.media_type === 'tv' ? el.name : el.title}
                      </li>
                    </Link>
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
