const initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_GENRE':
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};
