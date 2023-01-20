import { StateConfig } from '../interfaces';

const initialState: StateConfig = {
  years: [],
  genres: [],
  genresLoadingStatus: 'idle',
  movies: [],
  page: 0,
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
        genresLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        genresLoadingStatus: 'error',
      };

    case 'YEARS_FETCHED':
      return {
        ...state,
        years: payload,
        genresLoadingStatus: 'idle',
      };
    case 'MOVIES_FETCHED':
      return {
        ...state,
        movies: payload,
        genresLoadingStatus: 'idle',
      };

    case 'UPDATE_PAGE':
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};

export default reducer;
