import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="https://www.themoviedb.org/">
          <img src={process.env.PUBLIC_URL + `/MovieDBLogo.png`} id="logo" />
        </a>
        <a href="https://github.com/j-zuckerman/MovieDB">
          <i class="fab fa-github-alt" id="logo" style={{ float: 'right' }} />
        </a>
      </footer>
    );
  }
}

export default Footer;
