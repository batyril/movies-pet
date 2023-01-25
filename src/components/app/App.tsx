import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.sass';
import { Page404 } from '../../pages/page-404';
import { SingleMoviePage } from '../../pages/single-movie-page';
import useMarvelService from '../../hooks/useMoviesServices';
import { Layout } from '../../pages/layout';
import { HomePage } from '../../pages/home-page';

function App() {
  const { getMovies } = useMarvelService();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/:movieId' element={<SingleMoviePage />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export { App };
