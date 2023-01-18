import React from 'react';
import poster from '../../image/poster.png';
import bookmarks from '../../image/book.png';
import favourite from '../../image/fav.png';

function MoviesItem(props: { moviesData: { vote_average: number } }) {
  const {
    moviesData: { vote_average },
  } = props;
  return (
    <div className='movies__list-item film'>
      <div className='film__image'>
        <img src={poster} alt='film poster' />
      </div>

      <div className='film__main'>
        <div className='film__texts'>
          <div className='film__genres' />
          <div className='film__rating'> {vote_average} </div>
        </div>
        <div className='film__buttons'>
          <button className='button  film__detailed' type='button'>
            Подробнее
          </button>
          <button className='button  film__bookmarks' type='button'>
            <img src={bookmarks} alt='bookmarks button' />
          </button>
          <button className='button  film__favourites' type='button'>
            <img src={favourite} alt='favourite button' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviesItem;
