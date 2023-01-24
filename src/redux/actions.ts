import { ACTIONS_TYPE } from '../const';

export const filtersFetched = (filters: object) => ({
  type: ACTIONS_TYPE.FILTERS_FETCHED,
  payload: filters,
});

export const collectionsFetched = (filters: object) => ({
  type: ACTIONS_TYPE.COLLECTIONS_FETCHED,
  payload: filters,
});

export const yearsFetched = (years: object) => ({
  type: ACTIONS_TYPE.YEARS_FETCHED,
  payload: years,
});

export const sortingFetched = (years: object) => ({
  type: ACTIONS_TYPE.SORTING_FETCHED,
  payload: years,
});

export const moviesFetched = (movies: object) => ({
  type: ACTIONS_TYPE.MOVIES_FETCHED,
  payload: movies,
});
export const updateValueSorting = (sorting: string) => ({
  type: ACTIONS_TYPE.UPDATE_SORTING,
  payload: sorting,
});

export const updateValueYears = (years: number) => ({
  type: ACTIONS_TYPE.UPDATE_YEARS,
  payload: years,
});

export const updateSelectGenres = (genres: number) => ({
  type: ACTIONS_TYPE.UPDATE_SELECTED_GENRES,
  payload: genres,
});

export const updateSelectCollections = (collections: string) => ({
  type: ACTIONS_TYPE.UPDATE_SELECTED_COLLECTIONS,
  payload: collections,
});

export const updateAuthorization = (value: boolean) => ({
  type: ACTIONS_TYPE.UPDATE_AUTHORIZATION,
  payload: value,
});
