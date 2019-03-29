import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails, fetchSimilarMovies } from '../actions';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w780/';

class MovieDetails extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
      window.scrollTo(0, 0);
    }
  }
  fetch = () => {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchSimilarMovies(this.props.match.params.id);
  };
  componentWillMount() {
    this.fetch();
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props.similar);
    if (this.props.detail !== null && this.props.similar !== null) {
      return (
        <section>
          <img
            src={`${baseImageURLBackdrop}${this.props.detail.backdrop_path}`}
          />
          <h1>{this.props.detail.title}</h1>
          <h2>{this.props.detail.overview} </h2>
          <h2>Length: {this.props.detail.runtime} minutes </h2>
          <h2>Release Date: {this.props.detail.release_date} </h2>
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return {
    detail: state.movie.movieDetails,
    similar: state.movie.similarMovies
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchSimilarMovies }
)(MovieDetails);
