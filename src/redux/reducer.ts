import { AnyAction } from 'redux';
import { StateConfig } from '../const/interfaces';
import {
  ACTIONS_TYPE,
  defaultValueCollections,
  defaultValueGenres,
  defaultValueSorting,
  defaultValueYears,
} from '../const';

const initialState: StateConfig = {
  years: [],
  genres: [],
  movies: [],
  sorting: [],
  selectedSorting: defaultValueSorting,
  selectedCollections: defaultValueCollections,
  selectedYears: defaultValueYears,
  selectedGenres: defaultValueGenres,
  authorization: false,
  collections: [],
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
      };
    case ACTIONS_TYPE.UPDATE_YEARS:
      return {
        ...state,
        selectedYears: payload,
      };
    case ACTIONS_TYPE.UPDATE_SELECTED_GENRES:
      return {
        ...state,
        selectedGenres: payload,
      };
    case ACTIONS_TYPE.UPDATE_SELECTED_COLLECTIONS:
      return {
        ...state,
        selectedCollections: payload,
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
