import React, { useState } from 'react';
import './modal.sass';
import { useDispatch } from 'react-redux';
import closeImg from '../../image/close.png';
import { updateAuthorization } from '../../redux/actions';
import { ModalContentConfig } from '../../const/interfaces';

function ModalContent({ onClose }: ModalContentConfig) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const onEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailValue(event.target.value);
  };

  const onPassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordValue(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const emailUser = '12@mail.ru';
    const passwordUser = '12345';
    if (emailUser === emailValue && passwordUser === passwordValue) {
      onClose();
      dispatch(updateAuthorization(true));
    }
  };

  return (
    <div className='modal'>
      <div className='modal__content'>
        <button className='modal__close button' type='button' onClick={onClose}>
          <img src={closeImg} alt='close icon' />
        </button>
        <form onSubmit={onSubmit} className='modal__form'>
          <h2 className='modal__title'> Регистрация </h2>
          <label htmlFor='text'>
            почта
            <input
              onChange={onEmail}
              value={emailValue}
              required
              id='email'
              type='text'
            />
          </label>
          <label htmlFor='text'>
            пароль
            <input
              onChange={onPassword}
              value={passwordValue}
              required
              type='password'
            />
          </label>

          <button className='button modal__button' type='submit'>
            Войти
          </button>
        </form>
      </div>
      Close
    </div>
  );
}

export { ModalContent };
