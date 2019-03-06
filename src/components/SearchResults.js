import React, { Component } from 'react';
import { fetchSearchResults } from '../actions';
import { connect } from 'react-redux';
import '../styles/poster.css';
import '../styles/backdrop.css';
import { Link } from 'react-router-dom';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class SearchResults extends Component {
  componentWillMount() {
    this.props.fetchSearchResults(this.props.match.params.query);
  }
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
                          Rating: {el.vote_average}
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
