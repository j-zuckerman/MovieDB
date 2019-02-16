import React, { Component } from 'react';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchPlayingMovies,
  changeToMovieDisplay,
  changeToShowDisplay
} from '../actions';
import { connect } from 'react-redux';
import '../styles/poster.css';
import '../styles/backdrop.css';
import Carousel from './Carousel';
import Navbar from './Navbar';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchPlayingMovies();
  }
  render() {
    console.log(this.props.movie.popularMovies);
    if (this.props.movie.popularMovies.length > 0) {
      return (
        <React.Fragment>
          <section className="landing-page">
            <Navbar />
            <section
              className="backdrop"
              style={{
                backgroundImage: `url(
                ${baseImageURLBackdrop}${
                  this.props.movie.popularMovies[0].backdrop_path
                }
              )`
              }}
            >
              <div className="backdrop-layer_top backdrop-grid">
                <div className="backdrop-details">
                  <h2>MOST POPULAR</h2>
                  <h1>{this.props.movie.popularMovies[0].title}</h1>
                  <h2>
                    Rating: {this.props.movie.popularMovies[0].vote_average}
                  </h2>
                </div>
              </div>
            </section>
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

            <h1>Popular Movies</h1>
            <div className="row">
              <Carousel
                data={this.props.movie.popularMovies}
                id={'PopularMovies'}
                type={'MOVIES'}
              />
            </div>

            <h1>Top Rated Movies</h1>
            <div className="row">
              <Carousel
                data={this.props.movie.ratedMovies}
                id={'TopRatedMovies'}
                type={'MOVIES'}
              />
            </div>

            <h1>Movies Now Playing</h1>
            <div className="row">
              <Carousel
                data={this.props.movie.playingMovies}
                id={'LatestMovies'}
                type={'MOVIES'}
              />
            </div>
          </section>
        </React.Fragment>
      );
    } else return <div>Loading popular movies.</div>;
  }
}

const mapStateToProps = state => {
  return { movie: state.movie };
};
export default connect(
  mapStateToProps,
  {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchPlayingMovies,
    changeToMovieDisplay,
    changeToShowDisplay
  }
)(Movies);
