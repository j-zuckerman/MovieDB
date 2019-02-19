import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails, fetchSimilarShows } from '../actions';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

import '../styles/backdrop.css';
import '../styles/details.css';

const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w780/';

class ShowDetails extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
    }
  }
  fetch = () => {
    this.props.fetchShowDetails(this.props.match.params.id);
    this.props.fetchSimilarShows(this.props.match.params.id);
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
            <h1>{this.props.detail.name} </h1>
            <h2>Rating: {this.props.detail.vote_average} </h2>
            <br />
            <h2>{this.props.detail.overview} </h2>
            <br />

            <h2>First Air Date: {this.props.detail.first_air_date} </h2>
            <Link to="/" className="link">
              Go Back
            </Link>
            <h1>Similiar Shows</h1>
            <div className="row">
              <Carousel
                data={this.props.similar}
                id={'SimilarMovies'}
                type={'SHOWS'}
              />
            </div>
          </section>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { detail: state.movie.showDetails, similar: state.movie.similarShows };
};
export default connect(
  mapStateToProps,
  { fetchShowDetails, fetchSimilarShows }
)(ShowDetails);
