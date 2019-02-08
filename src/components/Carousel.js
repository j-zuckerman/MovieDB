import React, { Component } from 'react';
const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

class Carousel extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div class="row">
              {this.props.data
                .filter((el, index) => index < 5)
                .map(el => (
                  <img
                    className="d-block w-2000"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                  />
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div class="row">
              {this.props.data
                .filter((el, index) => index < 10 && index > 4)
                .map(el => (
                  <img
                    className="d-block w-2000"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                  />
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div class="row">
              {this.props.data
                .filter((el, index) => index < 15 && index > 9)
                .map(el => (
                  <img
                    className="d-block w-2000"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                  />
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div class="row">
              {this.props.data
                .filter((el, index) => index < 20 && index > 14)
                .map(el => (
                  <img
                    className="d-block w-2000"
                    src={`${baseImageURLPoster}${el.poster_path}`}
                    alt="First slide"
                  />
                ))}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
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

export default Carousel;
