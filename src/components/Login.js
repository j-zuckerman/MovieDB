import React, { Component } from 'react';
import Movies from './Movies';
import Shows from './Shows';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    if (this.props.display === true) {
      return <Movies />;
    } else return <Shows />;
  }
}

const mapStateToProps = state => {
  return { display: state.movie.onMovieDisplay };
};
export default connect(mapStateToProps)(Login);
