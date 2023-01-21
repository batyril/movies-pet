import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MoviesFilter.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import {
  GenresConfig,
  GenresMap,
  SortingConfig,
  StateConfig,
  ValueSortingConfig,
} from '../../interfaces';
import {
  updateSelectGenres,
  updateValueSorting,
  updateValueYears,
} from '../../redux/actions';
import Pagination from '../pagination/Pagination';

function MoviesFilter() {
  const dispatch = useDispatch();
  const yearsList: number[] = useSelector((state: StateConfig) => state.years);
  const selectYears: number = useSelector(
    (state: StateConfig) => state.valueYears
  );
  const genresList: GenresConfig[] = useSelector(
    (state: StateConfig) => state.genres
  );

  const selectSorting: ValueSortingConfig = useSelector(
    (state: StateConfig) => state.valueSorting
  );

  const sortingList: SortingConfig[] = useSelector(
    (state: StateConfig) => state.sorting
  );

  const selectGenres: number = useSelector(
    (state: StateConfig) => state.selectedGenres
  );
  const { getGenres, getYears, getSorting } = useMarvelService();
  useEffect(() => {
    getYears();
    getGenres();
    getSorting();
  }, []);

  const resetFilter = () => {
    const defaultValueSorting = 'popular down';
    const defaultValueYears = 2020;
    const defaultValueGenres = 0;

    dispatch(updateValueSorting(defaultValueSorting));
    dispatch(updateValueYears(defaultValueYears));
    dispatch(updateSelectGenres(defaultValueGenres));
  };
  const onChangeSorting = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameSorting = element.value;
    dispatch(updateValueSorting(nameSorting));
  };
  const onChangeYears = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const numberYears = Number(element.value);
    dispatch(updateValueYears(numberYears));
  };

  const onChangeGenres = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameGenres = Number(element.value);
    dispatch(updateSelectGenres(nameGenres));
  };

  return (
    <div className='filter'>
      <div className='movies__title'>GOOD MOVIES </div>
      <form className='filter__form'>
        <h3 className='filter__title'>Фильтры</h3>
        <button
          onClick={resetFilter}
          type='button'
          className='filter__reset-button button'
        >
          Сбросить все фильтры
        </button>

        <div className='filter__sorting'>
          <label htmlFor='sorting'>Сортировать по</label>
          <select onChange={onChangeSorting} value={selectSorting} id='sorting'>
            {sortingList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.text}
              </option>
            ))}
          </select>
        </div>

        <div className='filter__years'>
          <label htmlFor='years'>Год релиза</label>
          <select onChange={onChangeYears} value={selectYears} id='years'>
            {yearsList.map((item: number) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className='filter__genres'>
          Жанр
          <select onChange={onChangeGenres} value={selectGenres} id='genres'>
            {genresList.map(({ id, name }: GenresMap) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <Pagination />
      </form>
    </div>
  );
}

export default MoviesFilter;
