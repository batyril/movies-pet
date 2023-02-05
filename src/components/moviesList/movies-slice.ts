import { createSlice } from '@reduxjs/toolkit';
import { useMoviesServices } from '../../hooks/useMoviesServices';

const initialState = {
  movies: [],
  moviesLoadingStatus: '',
  watchLaterLoadingStatus: '',
  favoriteMoviesLoadingStatus: '',
  favoriteMovies: [],
  watchLater: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const {
      fetchMovies,
      fetchFavoriteMovies,
      fetchWatchLater,
      postFavoriteMovies,
    } = useMoviesServices();
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.moviesLoadingStatus = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesLoadingStatus = 'idle';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.moviesLoadingStatus = 'error';
      })
      .addCase(fetchWatchLater.pending, (state) => {
        state.watchLaterLoadingStatus = 'loading';
      })
      .addCase(fetchWatchLater.fulfilled, (state, action) => {
        state.watchLaterLoadingStatus = 'idle';
        state.watchLater = action.payload;
      })
      .addCase(fetchWatchLater.rejected, (state) => {
        state.watchLaterLoadingStatus = 'error';
      })
      .addCase(fetchFavoriteMovies.pending, (state) => {
        state.favoriteMoviesLoadingStatus = 'loading';
      })
      .addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
        state.favoriteMoviesLoadingStatus = 'idle';
        state.favoriteMovies = action.payload;
      })
      .addCase(fetchFavoriteMovies.rejected, (state) => {
        state.favoriteMoviesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = moviesSlice;

export { reducer };
