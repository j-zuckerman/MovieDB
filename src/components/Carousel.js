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
    // get link
    if (this.props.type === 'MOVIES') {
      this.setState({ detailLink: '/movie/details/' });
    } else if (this.props.type === 'SHOWS')
      this.setState({ detailLink: '/tv/details/' });
  }

  //convert decimal rating to a star rating
  createStarRating = rating => {
    let numOfCheckedStars = Math.round(rating / 2);
    let numOfUncheckedStars = 5 - numOfCheckedStars;
    let checkedStars = [];
    let uncheckedStars = [];
    let stars = [];
    for (let i = 0; i < numOfCheckedStars; i++) {
      checkedStars.push(<span class="fas fa-star" />);
    }
    for (let i = 0; i < numOfUncheckedStars; i++) {
      checkedStars.push(<span class="far fa-star" />);
    }

    stars.push(checkedStars);
    stars.push(uncheckedStars);
    return <div>{stars} </div>;
  };

  render() {
    if (this.props.data !== undefined) {
      return (
        <div
          id={this.props.id}
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row carousel-container">
                {this.props.data.length <= 0
                  ? ''
                  : this.props.data
                      .filter((el, index) => index < 5) //get first 5
                      .map(el => (
                        <Link to={this.state.detailLink + el.id}>
                          <div className="hvrbox poster">
                            <img
                              key={el.id}
                              className="hvrbox-layer_bottom"
                              src={`${baseImageURLPoster}${el.poster_path}`}
                              alt="poster"
                            />
                            <div className="hvrbox-layer_top ">
                              <div className="hvrbox-text">
                                {this.createStarRating(el.vote_average)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-container">
                {this.props.data.length <= 0
                  ? ''
                  : this.props.data
                      .filter((el, index) => index < 10 && index > 4) // get 5 - 10
                      .map(el => (
                        <Link to={this.state.detailLink + el.id}>
                          <div className="hvrbox poster">
                            <img
                              key={el.id}
                              className="hvrbox-layer_bottom"
                              src={`${baseImageURLPoster}${el.poster_path}`}
                              alt="poster"
                            />
                            <div className="hvrbox-layer_top">
                              <div className="hvrbox-text">
                                {this.createStarRating(el.vote_average)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-container">
                {this.props.data.length <= 0
                  ? ''
                  : this.props.data
                      .filter((el, index) => index < 15 && index > 9) //get 10 - 15
                      .map(el => (
                        <Link to={this.state.detailLink + el.id}>
                          <div className="hvrbox poster">
                            <img
                              key={el.id}
                              className="hvrbox-layer_bottom"
                              src={`${baseImageURLPoster}${el.poster_path}`}
                              alt="poster"
                            />
                            <div className="hvrbox-layer_top">
                              <div className="hvrbox-text">
                                {this.createStarRating(el.vote_average)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row carousel-container">
                {this.props.data.length <= 0
                  ? ''
                  : this.props.data
                      .filter((el, index) => index < 20 && index > 14) // get last 5
                      .map(el => (
                        <Link to={this.state.detailLink + el.id}>
                          <div className="hvrbox poster">
                            <img
                              key={el.id}
                              className="hvrbox-layer_bottom"
                              src={`${baseImageURLPoster}${el.poster_path}`}
                              alt="poster"
                            />
                            <div className="hvrbox-layer_top">
                              <div className="hvrbox-text">
                                {this.createStarRating(el.vote_average)}
                              </div>
                            </div>
                          </div>
                        </Link>
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
    } else return null;
  }
}

export default Carousel;
