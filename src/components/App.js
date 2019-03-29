import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Genre from './Genre';
import SearchResults from './SearchResults';
import Menu from './Menu';
import PopularMovies from './PopularMovies';
import PlayingMovies from './PlayingMovies';
import HighestRatedMovies from './HighestRatedMovies';

import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <Router basename="/MovieDB/">
        <section className="home-grid">
          <div className="home-grid_menu">
            <Menu />
          </div>

          <Switch>
            <div className="home-grid_display">
              <Route exact path="/" component={PopularMovies} />
              <Route
                exact
                path="/HighestRated"
                component={HighestRatedMovies}
              />
              <Route exact path="/NowPlaying" component={PlayingMovies} />
              <Route exact path="/movie/details/:id" component={MovieDetails} />
              <Route
                exact
                path="/search/results/:query"
                component={SearchResults}
              />
              <Route exact path="/genre/:genreID" component={Genre} />
            </div>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
