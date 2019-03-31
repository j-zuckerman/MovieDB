import React, { Component } from 'react';
import { fetchSearchResults } from '../actions';
import MovieContainer from './MovieContainer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/styles.css';

class SearchResults extends Component {
  componentWillMount() {
    this.props.fetchSearchResults(this.props.match.params.query);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.results);
    if (this.props.results.length > 0) {
      return (
        <div className="container">
          <h1>Search Results For {this.props.match.params.query}</h1>
          <MovieContainer data={this.props.results} />
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { results: state.search.searchResults };
};
export default connect(
  mapStateToProps,
  {
    fetchSearchResults
  }
)(SearchResults);
