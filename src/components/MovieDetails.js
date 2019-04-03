import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMovieDetails,
  fetchSimilarMovies,
  fetchMovieCast,
  fetchMovieTrailer
} from '../actions';
import { Link } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import CastContainer from './CastContainer';

import '../css/styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

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
    this.props.fetchMovieCast(this.props.match.params.id);
    this.props.fetchMovieTrailer(this.props.match.params.id);
  };
  componentWillMount() {
    this.fetch();
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props.detail);
    if (
      this.props.detail !== null &&
      this.props.similar !== null &&
      this.props.cast !== null &&
      this.props.trailer !== null
    ) {
      return (
        <div>
          <section className="movie-details-grid">
            <div className="movie-details-grid_poster">
              <img
                src={`${baseImageURLPoster}${this.props.detail.poster_path}`}
              />
            </div>
            <div className="movie-details-grid_info">
              <h1>{this.props.detail.title}</h1>
              <h2>{this.props.detail.tagline}</h2>
              <h3>
                {this.props.detail.vote_average} <i className="fas fa-star" />
                <span className="right">
                  {this.props.detail.spoken_languages[0].name} &nbsp;/&nbsp;
                  {this.props.detail.runtime} minutes &nbsp;/ &nbsp;
                  {this.props.detail.release_date}
                </span>
              </h3>
              <h3>Genres</h3>
              {this.props.detail.genres.map(genre => (
                <Link to={`/genre/${genre.id}`}>
                  <span>
                    <i className="far fa-dot-circle" />
                    &nbsp; {genre.name}
                  </span>
                </Link>
              ))}
              <h3>Overview</h3>
              <h3>{this.props.detail.overview} </h3>

              <h3>Cast</h3>
              <CastContainer data={this.props.cast} />

              {this.props.detail.hasOwnProperty('homepage') &&
              this.props.detail.homepage != null ? (
                <a
                  className="button"
                  href={this.props.detail.homepage}
                  target="_blank"
                >
                  <i className="fas fa-link" />
                  &nbsp; Website
                </a>
              ) : null}
              {this.props.detail.hasOwnProperty('imdb_id') ? (
                <a
                  className="button"
                  href={`https://www.imdb.com/title/${
                    this.props.detail.imdb_id
                  }`}
                  target="_blank"
                >
                  <i className="fab fa-imdb" />
                  &nbsp;IMDb
                </a>
              ) : null}
              {this.props.detail.hasOwnProperty('trailer') ? (
                <a
                  className="button"
                  href={`https://www.youtube.com/watch?v=${
                    this.props.trailer[0].key
                  }`}
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                  &nbsp;Trailer
                </a>
              ) : null}

              <a
                className="button back"
                onClick={() => this.props.history.goBack()}
              >
                <i className="fas fa-arrow-left" />
                &nbsp;Back
              </a>
            </div>
          </section>

          <section>
            <h1>Similiar Movies</h1>
            <MovieContainer data={this.props.similar} />
          </section>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return {
    detail: state.movie.movieDetails,
    similar: state.movie.similarMovies,
    cast: state.movie.movieCast,
    trailer: state.movie.movieTrailer
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchSimilarMovies, fetchMovieCast, fetchMovieTrailer }
)(MovieDetails);
