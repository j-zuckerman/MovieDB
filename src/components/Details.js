import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles.css';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Details extends Component {
  render() {
    console.log(this.props.detail.details);
    if (this.props.detail.details !== null) {
      return (
        <section
          className="selected"
          style={{
            backgroundImage: `url(
        ${baseImageURLBackdrop}${this.props.detail.details.backdrop_path}
      )`
          }}
        >
          <div className="backdrop-layer_top selected-grid">
            <section className="selected-details">
              <h1>{this.props.detail.details.title}</h1>
              <h1>{this.props.detail.details.adult}</h1>
              <h1>{this.props.detail.details.overview}</h1>
              <h1>{this.props.detail.details.runtime}</h1>
              <h1>{this.props.detail.details.release_date}</h1>
              <h1>{this.props.detail.details.tagline}</h1>
              <h1>{this.props.detail.details.vote_average}</h1>
            </section>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return { detail: state.movie };
};
export default connect(mapStateToProps)(Details);
