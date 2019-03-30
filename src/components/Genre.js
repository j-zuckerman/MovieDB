import React, { Component } from 'react';
import { fetchMoviesByGenre, fetchGenreList } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

class Genre extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.genreID !== prevProps.match.params.genreID) {
      this.fetch();
    }
  }
  fetch = () => {
    this.props.fetchMoviesByGenre(this.props.match.params.genreID);
    this.props.fetchGenreList();
  };
  componentWillMount() {
    this.fetch();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.results);
    console.log(this.props.genreList);
    if (this.props.results.length > 0 && this.props.genreList.length > 0) {
      return (
        <div>
          {this.props.genreList
            .filter(genre => genre.id == this.props.match.params.genreID)
            .map(genre => (
              <h1>{genre.name}&nbsp;Movies</h1>
            ))}
          <MovieContainer data={this.props.results} />
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { results: state.genre.results, genreList: state.genre.genreList };
};
export default connect(
  mapStateToProps,
  {
    fetchMoviesByGenre,
    fetchGenreList
  }
)(Genre);
