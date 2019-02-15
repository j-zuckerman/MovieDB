import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shows from './Shows';
import '../styles/home.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
