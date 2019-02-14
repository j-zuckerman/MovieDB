import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shows from './components/Shows';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/shows" component={Shows} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
