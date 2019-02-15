import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails, fetchSimilarShows } from '../actions';
import Carousel from './Carousel';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class ShowDetails extends Component {
  componentWillMount() {
    this.props.fetchShowDetails(this.props.match.params.id);
    this.props.fetchSimilarShows(this.props.match.params.id);
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

            <h1>Similiar Shows</h1>
            <div className="row">
              <Carousel
                data={this.props.similar}
                id={'SimilarMovies'}
                type={'SHOWS'}
              />
            </div>
          </div>
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { detail: state.movie.details, similar: state.movie.similarShows };
};
export default connect(
  mapStateToProps,
  { fetchShowDetails, fetchSimilarShows }
)(ShowDetails);
