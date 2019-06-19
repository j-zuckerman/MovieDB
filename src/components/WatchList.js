import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWatchList } from '../actions';
import MovieContainer from './MovieContainer';

class WatchList extends Component {
  fetch = () => {
    const listOfIDs = JSON.parse(localStorage.getItem('watchList')) || [];
    this.props.fetchWatchList(listOfIDs);
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.path !== prevProps.match.path) {
      this.fetch();
      window.scrollTo(0, 0);
    }
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Watch List</h1>
        {this.props.watchList && <MovieContainer data={this.props.watchList} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.movie.watchList
  };
};
export default connect(
  mapStateToProps,
  { fetchWatchList }
)(WatchList);
