import React from 'react';
import MoviesItem from '../moviesItem/MoviesItem';
import { filmsList } from '../../services/filters';
import './MoviesList.sass';

function MoviesList() {
  return (
    <div className='movies__list'>
      {filmsList.map((item) => (
        <MoviesItem key={item.id} moviesData={item} />
      ))}
    </div>
  );
}

export default MoviesList;
