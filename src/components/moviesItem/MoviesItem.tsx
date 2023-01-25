import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import bookmarks from '../../image/bookmarks.png';
import favourite from '../../image/favourite.png';
import { GenresConfig, Movie, StateConfig } from '../../const/interfaces';
import { ModalContent } from '../modal/modal';
import {
  nameLocalStorage,
  updateLocalStorage,
} from '../../utilities/localStorage';

function MoviesItem(props: { moviesData: Movie }) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    moviesData: { vote_average, poster_path, backdrop_path, genre_ids, id },
  } = props;
  const { moviesData } = props;
  const [showModal, setShowModal] = useState(false);
  const genresList: GenresConfig[] = useSelector(
    (state: StateConfig) => state.genres
  );

  const authorization: boolean = useSelector(
    (state: StateConfig) => state.authorization
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
            <Link to={`/${id}`}>Подробнее</Link>
          </button>
          <button
            onClick={() =>
              authorization
                ? updateLocalStorage(nameLocalStorage.favorites, moviesData)
                : setShowModal(true)
            }
            className='button  film__favourites'
            type='button'
          >
            <img src={favourite} alt='favourite button' />
          </button>
          <button
            onClick={() =>
              authorization
                ? updateLocalStorage(nameLocalStorage.seeLater, moviesData)
                : setShowModal(true)
            }
            className='button  film__bookmarks'
            type='button'
          >
            <img src={bookmarks} alt='bookmarks button' />
          </button>
        </div>
      </div>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}

export { MoviesItem };
