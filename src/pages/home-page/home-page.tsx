import React from 'react';
import { MoviesFilter } from '../../components/moviesFilter/movies-filter';
import { MoviesList } from '../../components/moviesList/movies-list';

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
