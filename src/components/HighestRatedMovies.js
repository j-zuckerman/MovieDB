import React, { Component } from 'react';
import { fetchTopRatedMovies } from '../actions';
import { connect } from 'react-redux';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

class HighestRatedMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.props.fetchTopRatedMovies();
  }
  render() {
    console.log(this.props.highestRatedMovies);
    if (this.props.highestRatedMovies.length > 0) {
      return (
        <section>
          <h1>Highest Rated Movies</h1>
          <MovieContainer data={this.props.highestRatedMovies} />
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { highestRatedMovies: state.movie.ratedMovies };
};
export default connect(
  mapStateToProps,
  {
    fetchTopRatedMovies
  }
)(HighestRatedMovies);
