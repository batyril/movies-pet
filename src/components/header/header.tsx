import React, { useState } from 'react';
import './header.sass';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { ModalContent } from '../modal/modal';
import { StateConfig } from '../../const/interfaces';
import { updateAuthorization } from '../moviesFilter/filters-slice';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const authorization: boolean = useAppSelector(
    (state: StateConfig) => state.filters.authorization
  );
  const dispatch = useAppDispatch();
  return (
    <div className='movies__header'>
      <div className='container'>
        <Link to='/' className='movies__home'>
          Home
        </Link>
        <button type='button' className='movies__search-button button'>
          <Link to='/search' className='movies__search'>
            Выбрать фильм
          </Link>
        </button>

        {authorization ? (
          <button
            onClick={() => dispatch(updateAuthorization(false))}
            className='movies__login button'
            type='button'
          >
            Выйти
          </button>
        ) : (
          <button
            onClick={() => setShowModal((state) => !state)}
            className='movies__login button'
            type='button'
          >
            Войти
          </button>
        )}

        {showModal &&
          createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.body
          )}
      </div>
    </div>
  );
}

export { Header };
