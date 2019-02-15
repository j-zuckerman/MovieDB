import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w500/';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
  }
  render() {
    if (this.props.detail !== null) {
      return (
        <section>
          <img
            src={`${baseImageURLBackdrop}${this.props.detail.backdrop_path}`}
          />
          <div>
            {this.props.detail.title} <br />
            {this.props.detail.adult} <br />
            {this.props.detail.runtime} <br />
            {this.props.detail.release_date} <br />
            {this.props.detail.tagline} <br />
            {this.props.detail.vote_average}
          </div>
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { detail: state.movie.details };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails }
)(MovieDetails);
