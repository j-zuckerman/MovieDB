const initialState = {
  playingMovies: [],
  popularMovies: [],
  ratedMovies: [],
  similarMovies: [],
  movieDetails: null,
  movieCast: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYING_MOVIES':
      return {
        ...state,
        playingMovies: action.payload
      };
    case 'POPULAR_MOVIES':
      return {
        ...state,
        popularMovies: action.payload
      };
    case 'RATED_MOVIES':
      return { ...state, ratedMovies: action.payload };
    case 'FETCH_SIMILAR_MOVIES':
      return { ...state, similarMovies: action.payload };
    case 'FETCH_MOVIE':
      return { ...state, movieDetails: action.payload };
    case 'FETCH_MOVIE_CAST':
      return { ...state, movieCast: action.payload };
    default:
      return state;
  }
};
