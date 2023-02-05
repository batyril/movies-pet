import { createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from './http.hook';
import { Movie } from '../const/interfaces';

const useMoviesServices = () => {
  const { request } = useHttp();
  const API = 'http://localhost:3000';

  const fetchMovies = createAsyncThunk('movies/fetchMovies', async () =>
    request(`${API}/movies`)
  );

  const fetchWatchLater = createAsyncThunk('movies/fetchWatchLater', async () =>
    request(`${API}/watchLater`)
  );
  const fetchFavoriteMovies = createAsyncThunk(
    'movies/fetchFavoriteMovies',
    async () => request(`${API}/favoriteMovies`)
  );

  const fetchFilters = createAsyncThunk('filters/fetchFilters', async () =>
    request(`${API}/filters`)
  );

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

  return {
    fetchMovies,
    fetchWatchLater,
    fetchFavoriteMovies,
    fetchFilters,
    postFavoriteMovies,
    postWatchLater,
  };
};

export { useMoviesServices };
