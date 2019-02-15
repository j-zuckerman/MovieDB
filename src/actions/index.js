import movieDbAPI from '../apis/movieDbAPI';
const apiKey = '9f39dd9c4f8c9231614049d653d261d6';

//Action creators
export const fetchTrending = () => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  dispatch({ type: 'TRENDING_FETCHED', payload: response.data.results });
};

export const fetchPopularMovies = () => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  dispatch({ type: 'POPULAR_MOVIES', payload: response.data.results });
};

export const fetchTopRatedMovies = () => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );

  dispatch({ type: 'RATED_MOVIES', payload: response.data.results });
};

export const fetchPopularShows = () => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'POPULAR_SHOWS', payload: response.data.results });
};

export const fetchMovie = id => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_MOVIE', payload: response.data });
};

export const changeToMovieDisplay = () => {
  return { type: 'CHANGE_TO_MOVIE_DISPLAY' };
};

export const changeToShowDisplay = () => {
  return { type: 'CHANGE_TO_SHOW_DISPLAY' };
};
