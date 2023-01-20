export interface StateConfig {
  years: number[] | [];
  genres: GenresConfig[];
  movies: Movie[];
  genresLoadingStatus: string;
  page: number;
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
