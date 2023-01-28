import { useDispatch } from 'react-redux';
import useHttp from './http.hook';
import {
  favoriteMoviesFetched,
  filtersFetched,
  moviesFetched,
  watchLaterFetched,
} from '../redux/actions';
import { Movie } from '../const/interfaces';

const useMoviesServices = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();
  const API = 'http://localhost:3000';

  const getMovies = async () => {
    const res: Movie[] = await request(`${API}/movies?`);
    dispatch(moviesFetched(res));
  };

  const getAllFilters = async () => {
    const res = await request(`${API}/filters`);
    dispatch(filtersFetched(res));
  };
  const getFavoriteMovies = async () => {
    const res: Movie[] = await request(`${API}/favoriteMovies`);
    dispatch(favoriteMoviesFetched(res));
  };
  const postFavoriteMovies = async (movie: Movie) => {
    const res: Movie[] = await request(
      `${API}/favoriteMovies`,
      'POST',
      JSON.stringify(movie)
    );
  };

  const postWatchLater = async (movie: Movie) => {
    const res: Movie[] = await request(
      `${API}/watchLater`,
      'POST',
      JSON.stringify(movie)
    );
  };

  const getWatchLater = async () => {
    const res: Movie[] = await request(`${API}/watchLater`);
    dispatch(watchLaterFetched(res));
  };

  return {
    getAllFilters,
    getMovies,
    loading,
    error,
    clearError,
    getFavoriteMovies,
    postFavoriteMovies,
    getWatchLater,
    postWatchLater,
  };
};

export { useMoviesServices };
