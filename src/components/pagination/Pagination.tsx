import React from 'react';
import './Pagination.sass';
import { useDispatch } from 'react-redux';

function Pagination() {
  const dispatch = useDispatch();
  /*
  const nextPage = () => {
    dispatch(updatePage(page + 8));
  };

  const prevPage = () => {
    if (page <= 0) {
      return;
    }
    dispatch(updatePage(page - 8));
  };
*/

  return (
    <div className='pagination'>
      <div className='pagination__buttons'>
        <button
          /*          disabled={page <= 0}
          onClick={prevPage} */
          className='pagination__button button'
          type='button'
        >
          Назад
        </button>
        <button
          /* onClick={nextPage} */
          className='pagination__button button'
          type='button'
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export default Pagination;
