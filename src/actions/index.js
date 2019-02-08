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

export const fetchPopularShows = () => async dispatch => {
  const response = await movieDbAPI.get('');

  dispatch({ type: 'POPULAR_SHOWS', payload: response.data.results });
};
