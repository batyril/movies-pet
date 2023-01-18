import React from 'react';
import Pagination from '../pagination/Pagination';
import './MoviesFilter.sass';
import { genresList, yearsList } from '../../services/filters';

function MoviesFilter() {
  return (
    <div className='filter'>
      <div className='movies__title'>GOOD MOVIES </div>
      <form className='filter__form'>
        <h3 className='filter__title'>Фильтры</h3>
        <button type='button' className='filter__reset-button button'>
          Сбросить все фильтры
        </button>

        <div className='filter__sorting'>
          <label htmlFor='sorting'>Сортировать по:</label>
          <select id='sorting'>
            <option>Сортировать по убыванию</option>
            <option>Сортировать по возрастанию</option>
          </select>
        </div>

        <div className='filter__years'>
          <label htmlFor='years'>Год релиза:</label>
          <select id='years'>
            {yearsList.map((item: number) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className='filter__genres'>
          {genresList.map(({ id, name }) => (
            <label key={id}>
              <input
                className='filter__genre-item'
                name={name}
                type='checkbox'
              />
              {name}
            </label>
          ))}
        </div>

        <Pagination />
      </form>
    </div>
  );
}

export default MoviesFilter;
