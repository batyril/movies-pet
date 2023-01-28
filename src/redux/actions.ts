import { ACTIONS_TYPE } from '../const';
import { Movie } from '../const/interfaces';

export const filtersFetched = (filters: object) => ({
  type: ACTIONS_TYPE.FILTERS_FETCHED,
  payload: filters,
});

export const watchLaterFetched = (movie: Movie[]) => ({
  type: ACTIONS_TYPE.WATCH_LATER_FETCHED,
  payload: movie,
});
export const favoriteMoviesFetched = (movie: Movie[]) => ({
  type: ACTIONS_TYPE.FAVORITE_MOVIES_FETCHED,
  payload: movie,
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

export const updateUpdateRating = (rating: string) => ({
  type: ACTIONS_TYPE.UPDATE_RATING,
  payload: rating,
});
export const updatePopularity = (popularity: string) => ({
  type: ACTIONS_TYPE.UPDATE_POPULARITY,
  payload: popularity,
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

export const updateSelectedPage = (value: boolean) => ({
  type: ACTIONS_TYPE.UPDATE_SELECTED_PAGE,
  payload: value,
});

export const resetSelectedPage = () => ({
  type: ACTIONS_TYPE.RESET_SELECTED_PAGE,
});
