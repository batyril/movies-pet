import React from 'react';
import './pagination.sass';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { StateConfig } from '../../const/interfaces';
import { updateSelectedPage } from './pagination-slice';

function Pagination() {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector(
    (state: StateConfig) => state.pagination.selectedPage
  );

  const nextPage = () => {
    dispatch(updateSelectedPage(true));
  };

  const prevPage = () => {
    dispatch(updateSelectedPage(false));
  };

  return (
    <div className='pagination'>
      <div className='pagination__buttons'>
        <button
          disabled={selectedPage <= 1}
          onClick={prevPage}
          className='pagination__button button'
          type='button'
        >
          Назад
        </button>
        <button
          onClick={nextPage}
          className='pagination__button button'
          type='button'
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export { Pagination };
