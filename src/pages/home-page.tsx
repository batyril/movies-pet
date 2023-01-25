import React from 'react';
import { MoviesFilter } from '../components/moviesFilter/MoviesFilter';
import { MoviesList } from '../components/moviesList/MoviesList';

function HomePage() {
  return (
    <div className='movies'>
      <MoviesFilter />
      <section className='movies__body'>
        <MoviesList />
      </section>
    </div>
  );
}

export { HomePage };
