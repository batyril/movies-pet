export const filtersFetched = (filters: object) => ({
  type: 'FILTERS_FETCHED',
  payload: filters,
});

export const yearsFetched = (years: object) => ({
  type: 'YEARS_FETCHED',
  payload: years,
});

export const moviesFetched = (movies: object) => ({
  type: 'MOVIES_FETCHED',
  payload: movies,
});

export const updatePage = (page: number) => ({
  type: 'UPDATE_PAGE',
  payload: page,
});
