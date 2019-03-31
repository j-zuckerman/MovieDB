const initialState = {
  details: null,
  movieAppearances: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CASTMEMBER_DETAILS':
      return {
        ...state,
        details: action.payload
      };
    case 'FETCH_CASTMEMBER_APPEARANCES':
      return {
        ...state,
        movieAppearances: action.payload
      };

    default:
      return state;
  }
};
