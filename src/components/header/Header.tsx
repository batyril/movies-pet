import React, { useState } from 'react';
import './Header.sass';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ModalContent } from '../modal/modal';
import { StateConfig } from '../../const/interfaces';
import { updateAuthorization } from '../../redux/actions';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const authorization: boolean = useSelector(
    (state: StateConfig) => state.authorization
  );
  const dispatch = useDispatch();
  return (
    <div className='movies__header'>
      <div className='container'>
        <Link to='/' className='movies__home'>
          Home
        </Link>

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
