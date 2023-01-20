import React from 'react';
import './Header.sass';
import Pagination from '../pagination/Pagination';

function Header() {
  return (
    <div className='movies__header'>
      <div className='container'>
        <a href='#' className='movies__home'>
          Home
        </a>
        <Pagination />
        <button className='movies__login button' type='button'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
