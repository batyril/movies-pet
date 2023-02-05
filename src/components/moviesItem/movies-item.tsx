import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { GenresConfig, Movie, StateConfig } from '../../const/interfaces';
import { ModalContent } from '../modal/modal';
import './movies-item.sass';
import { ButtonFavourite } from '../buttons/button-favourite';
import { ButtonWatchLater } from '../buttons/button-watch-later';

function MoviesItem(props: { moviesData: Movie }) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    moviesData: { vote_average, poster_path, backdrop_path, genre_ids, id },
  } = props;
  const { moviesData } = props;
  const [showModal, setShowModal] = useState(false);
  const genresList: GenresConfig[] = useAppSelector(
    (state: StateConfig) => state.filters.filters.genres
  );

  const getGenreById = (idGenre: number, genres: GenresConfig[]) =>
    genres.find((item) => item.id === idGenre);

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
          <ButtonFavourite
            moviesData={moviesData}
            setShowModal={(value: boolean) => setShowModal(value)}
          />
          <ButtonWatchLater
            moviesData={moviesData}
            setShowModal={(value: boolean) => setShowModal(value)}
          />
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
