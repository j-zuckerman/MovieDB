import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

//Component to display movie poster
class MovieContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addToFavorite = id => {
    let storedId = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

    if (storedId.indexOf(id) === -1) {
      storedId.push(id);
      localStorage.setItem('favoriteMovies', JSON.stringify(storedId));
    } else {
    }

    console.log(JSON.parse(localStorage.getItem('favoriteMovies')));
  };

  addToWatchList = id => {
    let storedId = JSON.parse(localStorage.getItem('watchList')) || [];

    if (storedId.indexOf(id) === -1) {
      storedId.push(id);
      localStorage.setItem('watchList', JSON.stringify(storedId));
    } else {
    }

    console.log(JSON.parse(localStorage.getItem('watchList')));
  };
  render() {
    return (
      <div className="movie-container">
        {this.props.data.map(movie => (
          <div className="poster">
            <div className="overlay">
              <div className="visible">
                <div className="add-btn">
                  <i
                    className="fas fa-heart"
                    onClick={() => this.addToFavorite(movie.id + '')}
                  />
                  <i
                    className="far fa-eye"
                    onClick={() => this.addToWatchList(movie.id + '')}
                  />
                </div>
                <div className="poster_details">
                  <h2>{movie.title}</h2>
                  <h2>
                    {movie.vote_average}&nbsp;
                    <i className="fas fa-star" />
                  </h2>
                  <Link to={`/movie/details/${movie.id}`}>Details </Link>
                </div>
              </div>
            </div>
            <div className="poster_image">
              <img
                key={movie.id}
                src={`${baseImageURLPoster}${movie.poster_path}`}
                alt="poster"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieContainer;
