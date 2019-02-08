const initialState = {
  trending: [],
  popularMovies: [],
  popularShows: []
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
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};
