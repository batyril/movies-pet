import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.sass';
import {
  HomePage,
  Page404,
  SingleMoviePage,
  Layout,
  MovieSearchPage,
} from '../../pages';
import { useAppDispatch } from '../../redux/store';
import { useMoviesServices } from '../../hooks/useMoviesServices';

function App() {
  const { fetchMovies, fetchFilters } = useMoviesServices();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
    dispatch(fetchMovies());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/search' element={<MovieSearchPage />} />
        <Route path='/:movieId' element={<SingleMoviePage />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export { App };
