import { AnyAction } from 'redux';
import { StateConfig } from '../const/interfaces';
import { ACTIONS_TYPE, DEFAULT_VALUE } from '../const';

const initialState: StateConfig = {
  years: [],
  genres: [],
  movies: [],
  sorting: [],
  selectedSorting: DEFAULT_VALUE.SORTING,
  selectedCollections: DEFAULT_VALUE.COLLECTIONS,
  selectedYears: DEFAULT_VALUE.YEARS,
  selectedGenres: DEFAULT_VALUE.GENRES,
  authorization: false,
  collections: [],
  selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
  countMoviesPage: DEFAULT_VALUE.COUNT_MOVIES_PAGE,
};

const reducer = (
  state: StateConfig = initialState,
  { type, payload }: AnyAction = { type: {} }
): StateConfig => {
  switch (type) {
    case ACTIONS_TYPE.FILTERS_FETCHED:
      return {
        ...state,
        genres: payload,
      };

    case ACTIONS_TYPE.YEARS_FETCHED:
      return {
        ...state,
        years: payload,
      };
    case ACTIONS_TYPE.COLLECTIONS_FETCHED:
      return {
        ...state,
        collections: payload,
      };
    case ACTIONS_TYPE.MOVIES_FETCHED:
      return {
        ...state,
        movies: payload,
      };
    case ACTIONS_TYPE.SORTING_FETCHED:
      return {
        ...state,
        sorting: payload,
      };
    case ACTIONS_TYPE.UPDATE_SORTING:
      return {
        ...state,
        selectedSorting: payload,
        selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
      };
    case ACTIONS_TYPE.UPDATE_YEARS:
      return {
        ...state,
        selectedYears: payload,
        selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
      };
    case ACTIONS_TYPE.UPDATE_SELECTED_GENRES:
      return {
        ...state,
        selectedGenres: payload,
        selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
      };
    case ACTIONS_TYPE.UPDATE_SELECTED_COLLECTIONS:
      return {
        ...state,
        selectedCollections: payload,
        selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
      };
    case ACTIONS_TYPE.UPDATE_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: payload ? state.selectedPage + 1 : state.selectedPage - 1,
      };
    case ACTIONS_TYPE.RESET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
      };

    case ACTIONS_TYPE.UPDATE_AUTHORIZATION:
      return {
        ...state,
        authorization: payload,
      };
    default:
      return state;
  }
};

export { reducer };
