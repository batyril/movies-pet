import React from 'react';
import './Pagination.sass';

function Pagination() {
  return (
    <div className='pagination'>
      <div className='pagination__buttons'>
        <button className='pagination__button button' type='button'>
          Назад
        </button>
        <button className='pagination__button button' type='button'>
          Вперед
        </button>
      </div>
      <div className='pagination__pages'>1 of 1244</div>
    </div>
  );
}

export default Pagination;
