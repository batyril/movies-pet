import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { StateConfig } from '../../const/interfaces';
import './single-movie-page.sass';

function SingleMoviePage() {
  const { movieId } = useParams();
  const moviesList = useAppSelector((state: StateConfig) =>
    state.movies.movies.find((movies) => movies.id === Number(movieId))
  );
  return (
    <div
      className='single-movie'
      style={{
        background: `url(https://image.tmdb.org/t/p/w500/${
          moviesList?.backdrop_path || ''
        }) 0 0/100% auto no-repeat  `,
      }}
    >
      <div className='single-movie__image'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            moviesList?.poster_path || ''
          }`}
          alt='film poster'
        />
      </div>
      <div className='single-movie__body'>
        <div className='single-movie__title'> {moviesList?.title || ''}</div>
        <div className='single-movie__overview'>
          {moviesList?.overview || ''}
        </div>
        <div className='single-movie__tags'>
          <div className='single-movie__language single-movie__tag'>
            Язык: {moviesList?.original_language || ''}
          </div>
          <div className='single-movie__release single-movie__tag'>
            Дата выхода: {moviesList?.release_date || ''}
          </div>
          <div className='single-movie__rating single-movie__tag'>
            Рейтинг: {moviesList?.vote_average || ''}
          </div>
        </div>
      </div>
    </div>
  );
}
export { SingleMoviePage };
