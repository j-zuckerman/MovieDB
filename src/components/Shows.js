import React, { Component } from 'react';
import {
  fetchPopularShows,
  changeToMovieDisplay,
  changeToShowDisplay
} from '../actions';
import { connect } from 'react-redux';
import '../styles/poster.css';
import Carousel from './Carousel';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Shows extends Component {
  componentDidMount() {
    this.props.fetchPopularShows();
  }
  render() {
    console.log(this.props.shows.popularShows);
    if (this.props.shows.popularShows.length > 0) {
      return (
        <React.Fragment>
          <section
            className="backdrop"
            style={{
              backgroundImage: `url(
                ${baseImageURLBackdrop}${
                this.props.shows.popularShows[0].backdrop_path
              }
              )`
            }}
          >
            <div className="backdrop-layer_top backdrop-grid">
              <div className="backdrop-details">
                <h2>MOST POPULAR</h2>
                <h1>{this.props.shows.popularShows[0].name}</h1>
                <h2>Rating: {this.props.shows.popularShows[0].vote_average}</h2>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="row">
              <button
                type="button"
                className="button"
                onClick={this.props.changeToMovieDisplay}
              >
                Movies
              </button>
              <button
                type="button"
                className="button"
                onClick={this.props.changeToShowDisplay}
              >
                Shows
              </button>
            </div>

            <h1>Popular Shows</h1>
            <div className="row">
              <Carousel data={this.props.shows.popularShows} />
            </div>
          </section>
        </React.Fragment>
      );
    } else return <div>Loading popular shows.</div>;
  }
}

const mapStateToProps = state => {
  return { shows: state.movie };
};
export default connect(
  mapStateToProps,
  { fetchPopularShows, changeToMovieDisplay, changeToShowDisplay }
)(Shows);
