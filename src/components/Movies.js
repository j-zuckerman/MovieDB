import React, { Component } from 'react';
import { fetchPopularMovies } from '../actions';
import { connect } from 'react-redux';
import '../styles.css';
import Carousel from './Carousel';
import Details from './Details';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }
  render() {
    console.log(this.props.movie.popularMovies);
    if (this.props.movie.popularMovies.length > 0) {
      return (
        <React.Fragment>
          <section
            className="backdrop backdrop-grid"
            style={{
              backgroundImage: `url(
                ${baseImageURLBackdrop}${
                this.props.movie.popularMovies[0].backdrop_path
              }
              )`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h1 className="backdrop-details"> Hello</h1>
          </section>
          <section>
            <h1>Popular Movies</h1>
            <div className="row">
              <Carousel data={this.props.movie.popularMovies} />
            </div>
          </section>
          <div className="row">
            <Details />
          </div>
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
  { fetchPopularMovies }
)(Movies);
