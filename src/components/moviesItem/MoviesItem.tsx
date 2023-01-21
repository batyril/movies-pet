import React from 'react';
import { useSelector } from 'react-redux';
import bookmarks from '../../image/book.png';
import favourite from '../../image/fav.png';
import { GenresConfig, StateConfig } from '../../interfaces';

function MoviesItem(props: {
  moviesData: {
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    genre_ids: number[];
  };
}) {
  const {
    moviesData: { vote_average, poster_path, backdrop_path, genre_ids },
  } = props;
  const genresList: GenresConfig[] = useSelector(
    (state: StateConfig) => state.genres
  );

  const getGenreById = (id: number, genres: GenresConfig[]) =>
    genres.find((item) => item.id === id);

  const genresFilmList = genre_ids.map((item: number) => {
    const genresFilm = getGenreById(item, genresList);
    if (genresFilm) {
      return genresFilm.name;
    }
  });

  const imagePath = poster_path || backdrop_path;

  return (
    <div className='movies__list-item film'>
      <div className='film__image'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
          alt='film poster'
        />
      </div>

      <div className='film__main'>
        <div className='film__texts'>
          <div className='film__genres'>
            {genresFilmList[0]}
            {genresFilmList[1] ? `, ${genresFilmList[1]}` : null}
          </div>
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
