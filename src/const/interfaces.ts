export interface StateConfig {
  filters: {
    data: FiltersConfig;
    selected: {
      popularity: string;
      rating: string;
      sorting: string;
      years: number;
      genres: number;
      collections: string;
    };
    authorization: boolean;
  };
  movies: {
    data: Movie[];
    favoriteMovies: Movie[];
    watchLater: Movie[];
  };
  pagination: {
    selectedPage: number;
    countMoviesPage: number;
  };
}

export interface FiltersConfig {
  sorting: SortingConfig[];
  collections: CollectionsConfig[];
  genres: GenresConfig[];
  years: number[];
}

export interface ButtonsConfig {
  moviesData: Movie;
  setShowModal: (value: boolean) => void;
}

export interface ModalContentConfig {
  onClose: () => void;
}

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
