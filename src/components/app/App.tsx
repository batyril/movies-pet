import React from 'react';
import './App.sass';
import Header from '../header/Header';
import MoviesFilter from '../moviesFilter/MoviesFilter';
import MoviesList from '../moviesList/MoviesList';

function App() {
  return (
    <div className='movies'>
      <MoviesFilter />
      <section className='movies__body'>
        <Header />
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
