import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails, fetchSimilarMovies } from '../actions';
import Carousel from './Carousel';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchSimilarMovies(this.props.match.params.id);
  }
  render() {
    console.log(this.props.similar);
    if (this.props.detail !== null && this.props.similar !== null) {
      return (
        <section className="details-backdrop">
          <img
            src={`${baseImageURLBackdrop}${this.props.detail.backdrop_path}`}
          />
          <div className="container">
            <h1>{this.props.detail.title} </h1>
            <h2>{this.props.detail.adult} </h2>
            <h2>{this.props.detail.runtime} </h2>
            <h2>{this.props.detail.release_date} </h2>
            <h2>{this.props.detail.tagline} </h2>
            <h2>{this.props.detail.vote_average} </h2>

            <h1>Similiar Movies</h1>
            <div className="row">
              <Carousel
                data={this.props.similar}
                id={'SimilarMovies'}
                type={'MOVIES'}
              />
            </div>
          </div>
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
