export interface StateConfig {
  years: number[];
  genres: GenresConfig[];
  movies: Movie[];
  sorting: SortingConfig[];
  selectedSorting: ValueSortingConfig;
  selectedYears: number;
  selectedGenres: number;
  authorization: boolean;
  collections: CollectionsConfig[];
  selectedCollections: string;
}

export interface ModalContentConfig {
  onClose: () => void;
}

export type ValueSortingConfig =
  | 'rating down'
  | 'rating up'
  | 'popular down'
  | 'popular up';

export interface SortingConfig {
  id: number;
  name: string;
  text: string;
}

export interface CollectionsConfig {
  id: number;
  name: string;
  text: string;
}

export interface GenresConfig {
  id: number;
  name: string;
}

export type GenresMap = { id: number; name: string };

export interface YearsConfig {
  years: number[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesConfig {
  movies: Movie[];
}
