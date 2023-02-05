import React from 'react';
import { ButtonsConfig, StateConfig } from '../../const/interfaces';
import { useMoviesServices } from '../../hooks/useMoviesServices';
import bookmarks from '../../image/bookmarks.png';
import addedBookmarks from '../../image/added-bookmarks.png';
import { useAppSelector } from '../../redux/store';

function ButtonWatchLater({ moviesData, setShowModal }: ButtonsConfig) {
  const watchLater = useAppSelector(
    (state: StateConfig) => state.movies.watchLater
  );
  const { postWatchLater } = useMoviesServices();
  const authorization: boolean = useAppSelector(
    (state: StateConfig) => state.filters.authorization
  );

  const currentImage = watchLater.some((item) => item.id === moviesData.id);

  return (
    <button
      onClick={() =>
        authorization ? postWatchLater(moviesData) : setShowModal(true)
      }
      className='button  film__bookmarks'
      type='button'
    >
      {currentImage ? (
        <img src={addedBookmarks} alt='bookmarks button' />
      ) : (
        <img src={bookmarks} alt='bookmarks button' />
      )}
    </button>
  );
}

export { ButtonWatchLater };
