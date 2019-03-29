import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import genreReducer from './genreReducer';
import searchReducer from './movieReducer';
import movieDisplayReducer from './movieDisplayReducer';

export default combineReducers({
  movie: movieReducer,
  search: searchReducer,
  display: movieDisplayReducer,
  genre: genreReducer
});
