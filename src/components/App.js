import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ShowDetails from './ShowDetails';
import '../styles/home.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/details/:id" component={MovieDetails} />
            <Route exact path="/show/details/:id" component={ShowDetails} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
