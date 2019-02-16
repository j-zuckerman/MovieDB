const initialState = {
  playingMovies: [],
  popularMovies: [],
  ratedMovies: [],
  similarMovies: [],
  onTheAirShows: [],
  ratedShows: [],
  popularShows: [],
  similiarShows: [],
  movieDetails: null,
  showDetails: null,
  onMovieDisplay: true
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
    case 'ON_THE_AIR_SHOWS':
      return { ...state, onTheAirShows: action.payload };
    case 'RATED_SHOWS':
      return { ...state, ratedShows: action.payload };
    case 'POPULAR_SHOWS':
      return { ...state, popularShows: action.payload };
    case 'FETCH_MOVIE':
      return { ...state, movieDetails: action.payload };
    case 'FETCH_SHOW':
      return { ...state, showDetails: action.payload };
    case 'FETCH_SIMILAR_SHOWS':
      return { ...state, similarShows: action.payload };
    case 'CHANGE_TO_MOVIE_DISPLAY':
      return { ...state, onMovieDisplay: true };
    case 'CHANGE_TO_SHOW_DISPLAY':
      return { ...state, onMovieDisplay: false };
    default:
      return state;
  }
};
