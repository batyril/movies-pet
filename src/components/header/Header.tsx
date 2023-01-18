import React from 'react';
import './Header.sass';

function Header() {
  return (
    <div className='movies__header'>
      <div className='container'>
        <a href='#' className='movies__home'>
          Home
        </a>
        <button className='movies__login button' type='button'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
