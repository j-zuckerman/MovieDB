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

export const fetchMovieDetails = id => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_MOVIE', payload: response.data });
};

export const fetchSimilarMovies = id => async dispatch => {
  const response = await movieDbAPI.get(
    `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  dispatch({ type: 'FETCH_SIMILAR_MOVIES', payload: response.data.results });
};

export const fetchMoviesByGenre = id => async dispatch => {
  const response = await movieDbAPI.get(
    `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  );
  dispatch({ type: 'FETCH_MOVIES_BY_GENRE', payload: response.data.results });
};

export const fetchSearchResults = searchValue => async dispatch => {
  if (searchValue.length > 1) {
    const response = await movieDbAPI.get(
      `search/multi?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1`
    );
    dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: response.data.results });
  } else {
    dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: null });
  }
};

export const changeToPopular = () => {
  return { type: 'POPULAR', payload: 'POPULAR' };
};

export const changeToTopRated = () => {
  return { type: 'TOP_RATED', payload: 'TOP_RATED' };
};

export const changeToNowPlaying = () => {
  return { type: 'NOW_PLAYING', payload: 'NOW_PLAYING' };
};
