import React from 'react';
import favourite from '../../image/favourite.png';
import addedFavourite from '../../image/added-favourite.png';
import { ButtonsConfig, StateConfig } from '../../const/interfaces';
import { useMoviesServices } from '../../hooks/useMoviesServices';
import { useAppSelector } from '../../redux/store';

function ButtonFavourite({ moviesData, setShowModal }: ButtonsConfig) {
  const favoriteMovies = useAppSelector(
    (state: StateConfig) => state.movies.favoriteMovies
  );
  const { postFavoriteMovies } = useMoviesServices();
  const authorization: boolean = useAppSelector(
    (state: StateConfig) => state.filters.authorization
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
