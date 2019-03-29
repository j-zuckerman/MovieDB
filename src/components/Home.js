import React, { Component } from 'react';
import Movies from './Movies';

import '../css/styles.css';

class Home extends Component {
  render() {
    return (
      <section className="home-grid">
        <Menu />
        <Movies />
      </section>
    );
  }
}

export default Home;
