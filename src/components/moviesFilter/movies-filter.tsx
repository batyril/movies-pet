import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import './movies-filter.sass';
import { StateConfig } from '../../const/interfaces';
import { Pagination } from '../pagination/pagination';
import { DEFAULT_VALUE } from '../../const';
import { FilterYearsItem } from '../filters/filter-years-item';
import { FilterSortingItem } from '../filters/filter-sorting-item';
import { FilterGenresItem } from '../filters/filter-genres-item';
import { FilterCollectionsItem } from '../filters/filter-collections-item';
import {
  updateSelectedYears,
  updateSelectedSorting,
  updateSelectedGenres,
} from './filters-slice';
import { resetSelectedPage } from '../pagination/pagination-slice';

function MoviesFilter() {
  const dispatch = useAppDispatch();
  const authorization: boolean = useAppSelector(
    (state: StateConfig) => state.filters.authorization
  );

  const resetFilter = () => {
    dispatch(updateSelectedSorting(DEFAULT_VALUE.SORTING));
    dispatch(updateSelectedYears(DEFAULT_VALUE.YEARS));
    dispatch(updateSelectedGenres(DEFAULT_VALUE.GENRES));
    dispatch(resetSelectedPage());
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
