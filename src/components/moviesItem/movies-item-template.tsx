import React from 'react';
import './movies-item.sass';
import posterTemplate from '../../image/poster-template.jpg';

function MoviesItemTemplate() {
  return (
    <div className='movies__list-item film'>
      <div className='film__image'>
        <img src={posterTemplate} alt='film poster' />
      </div>
    </div>
  );
}

export { MoviesItemTemplate };
