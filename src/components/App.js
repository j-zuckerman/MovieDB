import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ShowDetails from './ShowDetails';
import SearchResults from './SearchResults';
import Footer from './Footer';
import '../styles/home.css';

class App extends Component {
  render() {
    return (
      <Router basename="/MovieDB">
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/details/:id" component={MovieDetails} />
            <Route exact path="/tv/details/:id" component={ShowDetails} />
            <Route
              exact
              path="/search/results/:query"
              component={SearchResults}
            />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
