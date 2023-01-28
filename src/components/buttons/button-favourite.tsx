import React from 'react';
import { useSelector } from 'react-redux';
import favourite from '../../image/favourite.png';
import addedFavourite from '../../image/added-favourite.png';
import { ButtonsConfig, StateConfig } from '../../const/interfaces';
import { useMoviesServices } from '../../hooks/useMoviesServices';

// todo: сделать удаление фильмов
function ButtonFavourite({ moviesData, setShowModal }: ButtonsConfig) {
  const favoriteMovies = useSelector(
    (state: StateConfig) => state.favoriteMovies
  );
  const { postFavoriteMovies } = useMoviesServices();
  const authorization: boolean = useSelector(
    (state: StateConfig) => state.authorization
  );

  const currentImage = favoriteMovies.some((item) => item.id === moviesData.id);

  return (
    <button
      onClick={() =>
        authorization ? postFavoriteMovies(moviesData) : setShowModal(true)
      }
      className='button  film__favourites'
      type='button'
    >
      {currentImage ? (
        <img src={addedFavourite} alt='favourite button' />
      ) : (
        <img src={favourite} alt='favourite button' />
      )}
    </button>
  );
}

export { ButtonFavourite };
