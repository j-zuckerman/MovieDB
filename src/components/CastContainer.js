import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';

const baseImageURLProfile = 'https://image.tmdb.org/t/p/w45/';

class CastContainer extends Component {
  render() {
    return (
      <div className="cast-container">
        {this.props.data.map(castMember => (
          <Link to={`/person/${castMember.id}`}>
            <span className="cast-container_picture">
              <img
                key={castMember.id}
                className="cast-container_picture"
                src={`${baseImageURLProfile}${castMember.profile_path}`}
                alt="cast"
              />
            </span>
          </Link>
        ))}
      </div>
    );
  }
}

export default CastContainer;
