import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails, fetchSimilarMovies } from '../actions';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

import '../styles/backdrop.css';
import '../styles/details.css';

const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w780/';

class MovieDetails extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
    }
  }
  fetch = () => {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchSimilarMovies(this.props.match.params.id);
  };
  componentWillMount() {
    this.fetch();
  }
  render() {
    console.log(this.props.similar);
    if (this.props.detail !== null && this.props.similar !== null) {
      return (
        <div className="container">
          <section className="details">
            <img
              src={`${baseImageURLBackdrop}${this.props.detail.backdrop_path}`}
            />
            <h1>{this.props.detail.title} </h1>
            <h2>Rating: {this.props.detail.vote_average} </h2>
            <br />
            <h2>{this.props.detail.overview} </h2>
            <br />
            <h2>Length: {this.props.detail.runtime} minutes </h2>
            <h2>Release Date: {this.props.detail.release_date} </h2>

            <Link to="/" className="link">
              Go Back
            </Link>

            <h1>Similiar Movies</h1>
            <div className="row">
              <Carousel
                data={this.props.similar}
                id={'SimilarMovies'}
                type={'MOVIES'}
              />
            </div>
          </section>
        </div>
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
