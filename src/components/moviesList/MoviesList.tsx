import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviesItem from '../moviesItem/MoviesItem';
import './MoviesList.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import { StateConfig } from '../../interfaces';

function MoviesList() {
  const moviesList = useSelector((state: StateConfig) => state.movies);
  const page = useSelector((state: StateConfig) => state.page);
  const { getMovies } = useMarvelService();

  useEffect(() => {
    getMovies(page);
  }, [page]);

  useEffect(() => {
    getMovies(page);
  }, []);
  return (
    <div className='movies__list'>
      {moviesList.map((item) => (
        <MoviesItem key={item.id} moviesData={item} />
      ))}
    </div>
  );
}

export default MoviesList;
