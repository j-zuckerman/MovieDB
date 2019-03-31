import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import genreReducer from './genreReducer';
import searchReducer from './searchReducer';
import castReducer from './castReducer';
import movieDisplayReducer from './movieDisplayReducer';

export default combineReducers({
  movie: movieReducer,
  search: searchReducer,
  display: movieDisplayReducer,
  genre: genreReducer,
  cast: castReducer
});
