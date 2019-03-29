const initialState = {
  currentDisplay: 'POPULAR'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POPULAR':
      return {
        ...state,
        currentDisplay: action.payload
      };
    case 'TOP_RATED':
      return {
        ...state,
        currentDisplay: action.payload
      };
    case 'NOW_PLAYING':
      return {
        ...state,
        currentDisplay: action.payload
      };

    default:
      return state;
  }
};
