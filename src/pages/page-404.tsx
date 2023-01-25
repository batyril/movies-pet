import React from 'react';
import { Link } from 'react-router-dom';
import cat404 from '../image/sad-cat.png';

function Page404() {
  return (
    <div className='page-404'>
      <img alt=' icon page 404' src={cat404} />
      <p className='page-404__text'>the current page was not found</p>
      <Link className='page-404__link' to='/'>
        go to the main page
      </Link>
    </div>
  );
}

export { Page404 };
