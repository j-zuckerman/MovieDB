import React, { Component } from 'react';
import { fetchPopularShows } from '../actions';
import { connect } from 'react-redux';
import '../styles/poster.css';
import Carousel from './Carousel';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';
const baseImageURLBackdrop = 'https://image.tmdb.org/t/p/w1280/';

class Shows extends Component {
  componentDidMount() {
    this.props.fetchPopularShows();
  }
  render() {
    console.log(this.props.shows.popularShows);
    if (this.props.shows.popularShows.length > 0) {
      return (
        <React.Fragment>
          <section>
            <img
              src={`${baseImageURLBackdrop}${
                this.props.shows.popularShows[0].backdrop_path
              }`}
            />
          </section>
          <section className="container">
            <h1>Popular Shows</h1>
            <div className="row">
              <Carousel data={this.props.shows.popularShows} />
            </div>
          </section>
        </React.Fragment>
      );
    } else return <div>Loading popular shows.</div>;
  }
}

const mapStateToProps = state => {
  return { shows: state.movie };
};
export default connect(
  mapStateToProps,
  { fetchPopularShows }
)(Shows);
