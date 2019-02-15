import React, { Component } from 'react';
import { connect } from 'react-redux';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w500/';

class Details extends Component {
  render() {
    console.log(this.props.detail.details);
    if (this.props.detail.details !== null) {
      return (
        <section className="details-grid">
          <div className="selected-details">
            {this.props.detail.details.title} <br />
            {this.props.detail.details.adult} <br />
            {this.props.detail.details.runtime} <br />
            {this.props.detail.details.release_date} <br />
            {this.props.detail.details.tagline} <br />
            {this.props.detail.details.vote_average}
          </div>
          <img
            className="selected-image"
            src={`${baseImageURLBackdrop}${
              this.props.detail.details.backdrop_path
            }`}
          />
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
