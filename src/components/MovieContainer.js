import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

class MovieContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="movie-container">
        {this.props.data.map(movie => (
          <Link to={`/movie/details/${movie.id}`}>
            <div className="poster">
              <img
                key={movie.id}
                className="poster"
                src={`${baseImageURLPoster}${movie.poster_path}`}
                alt="poster"
              />
              <div className="poster_details">
                <h3>{movie.title}</h3>
                <h3>
                  {movie.vote_average}&nbsp;
                  <i className="fas fa-star" />
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default MovieContainer;
