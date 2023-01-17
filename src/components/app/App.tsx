import React from 'react';
import './App.sass';
import Header from '../header/Header';
import MoviesFilter from '../moviesFilter/MoviesFilter';
import MoviesList from '../moviesList/MoviesList';

function App() {
  return (
    <div className='movies'>
      <Header />
      <section className='movies__body container'>
        <MoviesFilter />
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
