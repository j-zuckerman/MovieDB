import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCastMemberAppearances, fetchCastMemberDetails } from '../actions';
import { Link } from 'react-router-dom';
import MovieContainer from './MovieContainer';

import '../css/styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

class CastMember extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
      window.scrollTo(0, 0);
    }
  }
  fetch = () => {
    this.props.fetchCastMemberDetails(this.props.match.params.id);
    this.props.fetchCastMemberAppearances(this.props.match.params.id);
  };
  componentWillMount() {
    this.fetch();
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props.detail);
    if (this.props.detail !== null && this.props.appearances !== null) {
      return (
        <div>
          <section className="movie-details-grid">
            <div className="movie-details-grid_poster">
              <img
                src={`${baseImageURLPoster}${this.props.detail.profile_path}`}
              />
            </div>
            <div className="movie-details-grid_info">
              <h1>{this.props.detail.name}</h1>
              <h2>Biography</h2>
              <h3 style={{ marginBottom: '2rem' }}>
                {this.props.detail.biography}
              </h3>

              {this.props.detail.hasOwnProperty('imdb_id') ? (
                <a
                  className="button"
                  href={`https://www.imdb.com/name/${
                    this.props.detail.imdb_id
                  }`}
                  target="_blank"
                >
                  <i className="fab fa-imdb" />
                  &nbsp;IMDb
                </a>
              ) : null}

              <a
                className="button back"
                onClick={() => this.props.history.goBack()}
              >
                <i className="fas fa-arrow-left" />
                &nbsp;Back
              </a>
            </div>
          </section>

          <section>
            <h1>Appears In</h1>
            <MovieContainer data={this.props.appearances} />
          </section>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return {
    detail: state.cast.details,
    appearances: state.cast.movieAppearances
  };
};
export default connect(
  mapStateToProps,
  { fetchCastMemberAppearances, fetchCastMemberDetails }
)(CastMember);
