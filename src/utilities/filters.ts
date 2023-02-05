import { Movie } from '../const/interfaces';

export function filterYearsGenresCollections(
  years: number,
  genres: number,
  collections: string,
  movies: Movie[],
  moviesWatchLater: Movie[],
  moviesFavorites: Movie[]
) {
  if (collections === 'Watch later') {
    if (moviesWatchLater) {
      return moviesWatchLater
        .filter((item: Movie) => item.release_date.includes(String(years)))
        .filter((item: Movie) =>
          genres === 0 ? true : item.genre_ids.includes(genres)
        );
    }
  } else if (collections === 'favorites') {
    if (moviesFavorites) {
      return moviesFavorites
        .filter((item: Movie) => item.release_date.includes(String(years)))
        .filter((item: Movie) =>
          genres === 0 ? true : item.genre_ids.includes(genres)
        );
    }
  }
  return movies
    .filter((item) => item.release_date.includes(String(years)))
    .filter((item) => (genres === 0 ? true : item.genre_ids.includes(genres)));
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function filteredPopularityRatingGenres(
  popularity: string,
  rating: string,
  genres: number,
  movies: Movie[]
) {
  const filteredMovies = movies
    .filter((item: Movie) =>
      genres === 0 ? true : item.genre_ids.includes(genres)
    )
    .filter((item: Movie) =>
      rating === 'high rating' ? item.vote_average > 5 : item.vote_average < 5
    )
    .filter((item: Movie) =>
      popularity === 'high popularity'
        ? item.popularity > 100
        : item.popularity < 100
    );
  return filteredMovies[randomIntFromInterval(0, filteredMovies.length - 1)];
}

export function filterPopularityDown(movies: Movie[]) {
  return movies.sort((prev, next) => prev.popularity - next.popularity);
}

export function filterPopularityUp(movies: Movie[]) {
  return movies
    .sort((prev, next) => prev.popularity - next.popularity)
    .reverse();
}

export function filterRatingUp(movies: Movie[]) {
  return movies.sort((prev, next) => prev.vote_average - next.vote_average);
}
export function filterRatingDown(movies: Movie[]) {
  return movies
    .sort((prev, next) => prev.vote_average - next.vote_average)
    .reverse();
}

export const getFilterMovies = (
  movies: Movie[],
  sorting: string,
  years: number,
  genres: number,
  collections: string,
  watchLater: Movie[],
  favoriteMovies: Movie[]
) => {
  switch (sorting) {
    case 'popular down':
      return filterPopularityDown(
        filterYearsGenresCollections(
          years,
          genres,
          collections,
          movies,
          watchLater,
          favoriteMovies
        )
      );
    case 'popular up':
      return filterPopularityUp(
        filterYearsGenresCollections(
          years,
          genres,
          collections,
          movies,
          watchLater,
          favoriteMovies
        )
      );
    case 'rating up':
      return filterRatingUp(
        filterYearsGenresCollections(
          years,
          genres,
          collections,
          movies,
          watchLater,
          favoriteMovies
        )
      );
    case 'rating down':
      return filterRatingDown(
        filterYearsGenresCollections(
          years,
          genres,
          collections,
          movies,
          watchLater,
          favoriteMovies
        )
      );
    default:
      return movies;
  }
};
