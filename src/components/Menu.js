import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  changeToPopular,
  changeToNowPlaying,
  changeToTopRated,
  fetchMoviesByGenre
} from '../actions';
import '../css/styles.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <a href="https://www.themoviedb.org/">
          <img src={process.env.PUBLIC_URL + `/logo.png`} id="logo" />
        </a>

        <h3 className="pushedIn">Browse</h3>
        <ul className="menu_list ">
          <Link to="/">
            <li
              className="menu_list_item menu_list_button"
              onClick={this.props.changeToPopular}
            >
              <i className="fas fa-heart" />
              &nbsp;Popular
            </li>
          </Link>
          <Link to="/HighestRated">
            <li
              className="menu_list_item menu_list_button"
              onClick={this.props.changeToTopRated}
            >
              <i className="far fa-chart-bar" />
              &nbsp;Highest Rated
            </li>
          </Link>
          <Link to="/NowPlaying">
            <li
              className="menu_list_item menu_list_button"
              onClick={this.props.changeToNowPlaying}
            >
              <i className="fas fa-play" /> &nbsp;Now Playing
            </li>
          </Link>
        </ul>

        <h3 className="pushedIn">Genres</h3>
        <ul className="menu_list">
          <Link to="/genre/28">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Action
            </li>
          </Link>
          <Link to="/genre/12">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Adventure
            </li>
          </Link>
          <Link to="/genre/16">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Animation
            </li>
          </Link>
          <Link to="/genre/35">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Comedy
            </li>
          </Link>
          <Link to="/genre/80">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Crime
            </li>
          </Link>
          <Link to="/genre/99">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Documentary
            </li>
          </Link>
          <Link to="/genre/18">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Drama
            </li>
          </Link>
          <Link to="/genre/10751">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Family
            </li>
          </Link>
          <Link to="/genre/14">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Fantasy
            </li>
          </Link>
          <Link to="/genre/36">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; History
            </li>
          </Link>
          <Link to="/genre/27">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Horror
            </li>
          </Link>
          <Link to="/genre/10402">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Music
            </li>
          </Link>
          <Link to="/genre/9648">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Mystery
            </li>
          </Link>
          <Link to="/genre/10749">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Romance
            </li>
          </Link>
          <Link to="/genre/878">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Science Fiction
            </li>
          </Link>
          <Link to="/genre/10770">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; TV Movie
            </li>
          </Link>
          <Link to="/genre/53">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Thriller
            </li>
          </Link>
          <Link to="/genre/10752">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; War
            </li>
          </Link>
          <Link to="/genre/37">
            <li className="menu_list_item menu_list_button">
              <i className="far fa-dot-circle" />
              &nbsp; Western
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { display: state.display.onMovieDisplay };
};
export default connect(
  mapStateToProps,
  { changeToNowPlaying, changeToPopular, changeToTopRated }
)(Menu);
