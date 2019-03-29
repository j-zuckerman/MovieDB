import React, { Component } from 'react';
import { fetchSearchResults } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class SearchResults extends Component {
  componentWillMount() {
    this.props.fetchSearchResults(this.props.match.params.query);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
    console.log(this.props.results);
    if (this.props.results !== null) {
      return (
        <React.Fragment>
          <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
            Results for {this.props.match.params.query}
          </h1>
          <section className="container">
            <div className="row">
              {this.props.results
                .filter(
                  el => el.media_type === 'tv' || el.media_type === 'movie'
                )
                .map((el, index) => (
                  <Link to={'/' + el.media_type + '/details/' + el.id}>
                    <div className="hvrbox poster">
                      <img
                        key={el.id}
                        className="hvrbox-layer_bottom"
                        src={`${baseImageURLPoster}${el.poster_path}`}
                        alt="First slide"
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

            <Link to="/" className="link">
              Go Back
            </Link>
          </section>
        </React.Fragment>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { results: state.movie.searchResults };
};
export default connect(
  mapStateToProps,
  {
    fetchSearchResults
  }
)(SearchResults);
