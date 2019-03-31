import React, { Component } from 'react';
import { fetchPlayingMovies } from '../actions';
import { connect } from 'react-redux';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

class PlayingMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.props.fetchPlayingMovies();
  }
  render() {
    console.log(this.props.playingMovies);
    if (this.props.playingMovies.length > 0) {
      return (
        <section className="container">
          <h1>Now Playing Movies</h1>
          <MovieContainer data={this.props.playingMovies} />
        </section>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { playingMovies: state.movie.playingMovies };
};
export default connect(
  mapStateToProps,
  {
    fetchPlayingMovies
  }
)(PlayingMovies);
