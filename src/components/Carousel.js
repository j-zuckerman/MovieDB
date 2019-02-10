import React, { Component } from 'react';
import { fetchMovie } from '../actions';
import { connect } from 'react-redux';
import '../styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

class Carousel extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div
        id="carousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 5)
                .map(el => (
                  <section key={el.id} className="poster zoom">
                    <img
                      src={`${baseImageURLPoster}${el.poster_path}`}
                      alt="First slide"
                      onClick={() => this.props.fetchMovie(el.id)}
                      className="image"
                    />
                    <p className="description bottom-left">
                      This image looks super neat.
                    </p>
                  </section>
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 10 && index > 4)
                .map(el => (
                  <img
                    key={el.id}
                    className="d-block poster"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                    onClick={() => this.props.fetchMovie(el.id)}
                  />
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 15 && index > 9)
                .map(el => (
                  <img
                    key={el.id}
                    className="d-block poster zoom"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                    onClick={() => this.props.fetchMovie(el.id)}
                  />
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 20 && index > 14)
                .map(el => (
                  <img
                    key={el.id}
                    className="d-block poster"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                    onClick={() => this.props.fetchMovie(el.id)}
                  />
                ))}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchMovie }
)(Carousel);
