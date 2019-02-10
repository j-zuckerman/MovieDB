const initialState = {
  trending: [],
  popularMovies: [],
  popularShows: [],
  details: null
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
    case 'POPULAR_SHOWS':
      return { ...state, popularShows: action.payload };
    case 'FETCH_MOVIE':
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
