const initialState = {
  results: [],
  genreList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_GENRE':
      return {
        ...state,
        results: action.payload
      };
    case 'FETCH_GENRE_LIST':
      return {
        ...state,
        genreList: action.payload
      };

    default:
      return state;
  }
};
