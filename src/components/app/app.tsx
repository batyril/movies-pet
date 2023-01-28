import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.sass';
import { useMoviesServices } from '../../hooks/useMoviesServices';
import {
  HomePage,
  Page404,
  SingleMoviePage,
  Layout,
  MovieSearchPage,
} from '../../pages';

function App() {
  const { getMovies, getAllFilters } = useMoviesServices();
  useEffect(() => {
    getMovies();
    getAllFilters();
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
