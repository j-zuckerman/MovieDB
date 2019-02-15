const initialState = {
  trending: [],
  popularMovies: [],
  ratedMovies: [],
  popularShows: [],
  details: null,
  onMovieDisplay: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRENDING_FETCHED':
      return {
        ...state,
        trending: action.payload
      };
    case 'POPULAR_MOVIES':
      return {
        ...state,
        popularMovies: action.payload
      };
    case 'RATED_MOVIES':
      return { ...state, ratedMovies: action.payload };
    case 'POPULAR_SHOWS':
      return { ...state, popularShows: action.payload };
    case 'FETCH_MOVIE':
      return { ...state, details: action.payload };
    case 'CHANGE_TO_MOVIE_DISPLAY':
      return { ...state, onMovieDisplay: true };
    case 'CHANGE_TO_SHOW_DISPLAY':
      return { ...state, onMovieDisplay: false };
    default:
      return state;
  }
};
