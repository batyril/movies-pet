import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MoviesFilter.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import { StateConfig } from '../../const/interfaces';
import {
  updateSelectGenres,
  updateValueSorting,
  updateValueYears,
} from '../../redux/actions';
import { Pagination } from '../pagination/Pagination';
import {
  defaultValueGenres,
  defaultValueSorting,
  defaultValueYears,
} from '../../const';
import { FilterYearsItem } from '../filters/filter-years-item';
import { FilterSortingItem } from '../filters/filter-sorting-item';
import { FilterGenresItem } from '../filters/filter-genres-item';
import { FilterCollectionsItem } from '../filters/filter-collections-item';

function MoviesFilter() {
  const dispatch = useDispatch();
  const authorization: boolean = useSelector(
    (state: StateConfig) => state.authorization
  );
  const { getGenres, getYears, getSorting, getCollections } =
    useMarvelService();
  useEffect(() => {
    getYears();
    getGenres();
    getSorting();
    getCollections();
  }, []);

  const resetFilter = () => {
    dispatch(updateValueSorting(defaultValueSorting));
    dispatch(updateValueYears(defaultValueYears));
    dispatch(updateSelectGenres(defaultValueGenres));
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

        <FilterSortingItem />

        <FilterYearsItem />

        <FilterGenresItem />

        {authorization ? <FilterCollectionsItem /> : null}

        <Pagination />
      </form>
    </div>
  );
}

export { MoviesFilter };
