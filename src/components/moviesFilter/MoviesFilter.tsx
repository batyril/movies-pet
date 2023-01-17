import React from 'react';
import Pagination from '../pagination/Pagination';
import './MoviesFilter.sass';
import { genresList, yearsList } from '../../services/filters';

function MoviesFilter() {
  return (
    <form className='filter'>
      <h3>Фильтры</h3>

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
            <option>{item}</option>
          ))}
        </select>
      </div>

      <div className='filter__genres'>
        {genresList.map((item: string) => (
          <label>
            <input className='filter__genre-item' name={item} type='checkbox' />
            {item}
          </label>
        ))}
      </div>

      <Pagination />
    </form>
  );
}

export default MoviesFilter;
