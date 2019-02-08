import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg" style={{ background: '#141414' }}>
        <a class="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + `movielogo.svg`}
            width="75"
            height="75"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a class="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
