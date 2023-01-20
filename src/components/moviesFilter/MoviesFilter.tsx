import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MoviesFilter.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import { GenresConfig, GenresMap, StateConfig } from '../../interfaces';

function MoviesFilter() {
  const yearsList: number[] = useSelector((state: StateConfig) => state.years);
  const genresList: GenresConfig[] = useSelector(
    (state: StateConfig) => state.genres
  );
  const { getGenres, getYears } = useMarvelService();
  useEffect(() => {
    getYears();
    getGenres();
  }, []);

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
            <option>Рейтинг по убыванию</option>
            <option>Рейтинг по возрастанию</option>
            <option>Рейтинг по возрастанию</option>
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
          {genresList.map(({ id, name }: GenresMap) => (
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
      </form>
    </div>
  );
}

export default MoviesFilter;
