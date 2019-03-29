import React, { Component } from 'react';
import { fetchMoviesByGenre } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

class Genre extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.genreID !== prevProps.match.params.genreID) {
      this.fetch();
    }
  }
  fetch = () => {
    this.props.fetchMoviesByGenre(this.props.match.params.genreID);
  };
  componentWillMount() {
    this.fetch();
  }

  render() {
    console.log(this.props.results);
    if (this.props.results.length > 0) {
      return <MovieContainer data={this.props.results} />;
    } else return null;
  }
}

const mapStateToProps = state => {
  return { results: state.genre.results };
};
export default connect(
  mapStateToProps,
  {
    fetchMoviesByGenre
  }
)(Genre);
