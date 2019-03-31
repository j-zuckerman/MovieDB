const initialState = {
  searchResults: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
