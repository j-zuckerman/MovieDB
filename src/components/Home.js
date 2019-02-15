import React, { Component } from 'react';
import Movies from './Movies';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      displayMovies: true
    };
  }
  render() {
    if (this.state.displayMovies) {
      return <Movies />;
    }
  }
}

export default Home;
