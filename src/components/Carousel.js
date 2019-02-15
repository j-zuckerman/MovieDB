import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/carousel.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailLink: ''
    };
  }
  componentDidMount() {
    if (this.props.type === 'MOVIES') {
      this.setState({ detailLink: '/movie/details/' });
    } else if (this.props.type === 'SHOWS')
      this.setState({ detailLink: '/show/details/' });
  }
  render() {
    console.log(this.props.data);
    return (
      <div
        id={this.props.id}
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
                  <Link to={this.state.detailLink + el.id}>
                    <div className="hvrbox poster">
                      <img
                        key={el.id}
                        className="hvrbox-layer_bottom"
                        src={`${baseImageURLPoster}${el.poster_path}`}
                        alt="First slide"
                      />
                      <div className="hvrbox-layer_top ">
                        <div className="hvrbox-text">
                          Rating: {el.vote_average}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 10 && index > 4)
                .map(el => (
                  <div className="hvrbox poster">
                    <img
                      key={el.id}
                      className="hvrbox-layer_bottom"
                      src={`${baseImageURLPoster}${el.poster_path}`}
                      alt="First slide"
                    />
                    <div className="hvrbox-layer_top">
                      <div className="hvrbox-text">
                        Rating: {el.vote_average}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 15 && index > 9)
                .map(el => (
                  <div className="hvrbox poster">
                    <img
                      key={el.id}
                      className="hvrbox-layer_bottom"
                      src={`${baseImageURLPoster}${el.poster_path}`}
                      alt="First slide"
                    />
                    <div className="hvrbox-layer_top">
                      <div className="hvrbox-text">
                        Rating: {el.vote_average}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {this.props.data
                .filter((el, index) => index < 20 && index > 14)
                .map(el => (
                  <div className="hvrbox poster">
                    <img
                      key={el.id}
                      className="hvrbox-layer_bottom"
                      src={`${baseImageURLPoster}${el.poster_path}`}
                      alt="First slide"
                    />
                    <div className="hvrbox-layer_top">
                      <div className="hvrbox-text">
                        Rating: {el.vote_average}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href={`#${this.props.id}`}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={`#${this.props.id}`}
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
