import movieDbAPI from '../apis/movieDbAPI';
const apiKey = '9f39dd9c4f8c9231614049d653d261d6';

//Action creators
export const fetchPlayingMovies = () => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );

  dispatch({ type: 'PLAYING_MOVIES', payload: response.data.results });
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
export const fetchOnTheAirShows = () => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'ON_THE_AIR_SHOWS', payload: response.data.results });
};
export const fetchTopRatedShows = () => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'RATED_SHOWS', payload: response.data.results });
};

export const fetchPopularShows = () => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'POPULAR_SHOWS', payload: response.data.results });
};

export const fetchMovieDetails = id => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_MOVIE', payload: response.data });
};

export const fetchShowDetails = id => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/${id}?api_key=${apiKey}&language=en-US`
  );
  dispatch({ type: 'FETCH_SHOW', payload: response.data });
};

export const fetchSimilarMovies = id => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_SIMILAR_MOVIES', payload: response.data.results });
};

export const fetchSimilarShows = id => async dispatch => {
  const response = await movieDbAPI.get(
    `tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_SIMILAR_SHOWS', payload: response.data.results });
};

export const changeToMovieDisplay = () => {
  return { type: 'CHANGE_TO_MOVIE_DISPLAY' };
};

export const changeToShowDisplay = () => {
  return { type: 'CHANGE_TO_SHOW_DISPLAY' };
};
