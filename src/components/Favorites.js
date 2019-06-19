import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions';
import MovieContainer from './MovieContainer';

class Favorites extends Component {
  fetch = () => {
    const listOfIDs = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    this.props.fetchFavorites(listOfIDs);
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.path !== prevProps.match.path) {
      this.fetch();
      window.scrollTo(0, 0);
    }
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Favorite Movies</h1>
        {this.props.favorites && <MovieContainer data={this.props.favorites} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.movie.favorites
  };
};
export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites);
