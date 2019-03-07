import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchPopularShows,
  fetchOnTheAirShows,
  fetchTopRatedShows,
  changeToMovieDisplay,
  changeToShowDisplay
} from '../actions';
import { connect } from 'react-redux';
import '../styles/poster.css';
import Carousel from './Carousel';
import SearchBar from './SearchBar';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Shows extends Component {
  componentWillMount() {
    this.props.fetchPopularShows();
    this.props.fetchOnTheAirShows();
    this.props.fetchTopRatedShows();
  }
  render() {
    if (
      this.props.shows.popularShows.length > 0 &&
      this.props.shows.ratedShows.length > 0 &&
      this.props.shows.onTheAirShows.length > 0
    ) {
      return (
        <React.Fragment>
          <section className="landing-page">
            <Link
              to={`tv/details/${this.props.shows.popularShows[0].id}`}
              style={{ textDecoration: 'none' }}
            >
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
                    <h2>
                      Rating: {this.props.shows.popularShows[0].vote_average}
                    </h2>
                  </div>
                </div>
              </section>
            </Link>
          </section>
          <section className="container">
            <SearchBar />
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
              <Carousel
                data={this.props.shows.popularShows}
                id={'PopularShows'}
                type={'SHOWS'}
              />
            </div>

            <h1>Top Rated Shows</h1>
            <div className="row">
              <Carousel
                data={this.props.shows.ratedShows}
                id={'TopRatedShows'}
                type={'SHOWS'}
              />
            </div>

            <h1>Shows On The Air</h1>
            <div className="row">
              <Carousel
                data={this.props.shows.onTheAirShows}
                id={'LatestShows'}
                type={'SHOWS'}
              />
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
  {
    fetchPopularShows,
    fetchOnTheAirShows,
    fetchTopRatedShows,
    changeToMovieDisplay,
    changeToShowDisplay
  }
)(Shows);
