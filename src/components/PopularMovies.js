import React, { Component } from 'react';
import { fetchPopularMovies } from '../actions';
import { connect } from 'react-redux';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

class PopularMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.props.fetchPopularMovies();
  }
  render() {
    console.log(this.props.popularMovies);
    if (this.props.popularMovies.length > 0) {
      return (
        <section className="container">
          <h1>Popular Movies</h1>
          <MovieContainer data={this.props.popularMovies} />
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { popularMovies: state.movie.popularMovies };
};
export default connect(
  mapStateToProps,
  {
    fetchPopularMovies
  }
)(PopularMovies);
