import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shows from './components/Shows';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/shows" component={Shows} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
