import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonsConfig, StateConfig } from '../../const/interfaces';
import { useMoviesServices } from '../../hooks/useMoviesServices';
import bookmarks from '../../image/bookmarks.png';
import addedBookmarks from '../../image/added-bookmarks.png';

function ButtonWatchLater({ moviesData, setShowModal }: ButtonsConfig) {
  const watchLater = useSelector((state: StateConfig) => state.watchLater);
  const { postWatchLater } = useMoviesServices();
  const authorization: boolean = useSelector(
    (state: StateConfig) => state.authorization
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
