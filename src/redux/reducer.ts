import { StateConfig } from '../interfaces';

const initialState: StateConfig = {
  years: [],
  genres: [],
  movies: [],
  sorting: [],
  valueSorting: 'popular down',
  valueYears: 2020,
  selectedGenres: 0,
};
const reducer = (
  state: StateConfig = initialState,
  { type, payload }: { type: string; payload: object | number }
) => {
  switch (type) {
    case 'FILTERS_FETCHED':
      return {
        ...state,
        genres: payload,
      };

    case 'YEARS_FETCHED':
      return {
        ...state,
        years: payload,
      };
    case 'MOVIES_FETCHED':
      return {
        ...state,
        movies: payload,
      };
    case 'SORTING_FETCHED':
      return {
        ...state,
        sorting: payload,
      };
    case 'UPDATE_SORTING':
      return {
        ...state,
        valueSorting: payload,
      };
    case 'UPDATE_YEARS':
      return {
        ...state,
        valueYears: payload,
      };
    case 'UPDATE_SELECTED_GENRES':
      return {
        ...state,
        selectedGenres: payload,
      };
    default:
      return state;
  }
};

export default reducer;
