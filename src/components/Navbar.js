import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar ">
        <a className="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + `/movielogo.svg`}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="MovieDB"
          />
        </a>
      </nav>
    );
  }
}

export default Navbar;
