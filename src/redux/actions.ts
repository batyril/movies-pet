import { ValueSortingConfig } from '../interfaces';

export const filtersFetched = (filters: object) => ({
  type: 'FILTERS_FETCHED',
  payload: filters,
});

export const yearsFetched = (years: object) => ({
  type: 'YEARS_FETCHED',
  payload: years,
});

export const sortingFetched = (years: object) => ({
  type: 'SORTING_FETCHED',
  payload: years,
});

export const moviesFetched = (movies: object) => ({
  type: 'MOVIES_FETCHED',
  payload: movies,
});
export const updateValueSorting = (sorting: string) => ({
  type: 'UPDATE_SORTING',
  payload: sorting,
});

export const updateValueYears = (years: number) => ({
  type: 'UPDATE_YEARS',
  payload: years,
});

export const updateSelectGenres = (genres: number) => ({
  type: 'UPDATE_SELECTED_GENRES',
  payload: genres,
});
