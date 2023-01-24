import { Movie } from '../const/interfaces';
import { getLocalStorage, nameLocalStorage } from './localStorage';

export function filterYearsGenresCollections(
  years: number,
  genres: number,
  collections: string,
  movies: Movie[]
) {
  if (collections === 'Watch later') {
    const moviesWatchLater = getLocalStorage(nameLocalStorage.seeLater);
    if (moviesWatchLater !== null) {
      return moviesWatchLater
        .filter((item: Movie) => item.release_date.includes(String(years)))
        .filter((item: Movie) =>
          genres === 0 ? true : item.genre_ids.includes(genres)
        );
    }
  } else if (collections === 'favorites') {
    const moviesWatchLater = getLocalStorage(nameLocalStorage.favorites);
    if (moviesWatchLater !== null) {
      return moviesWatchLater
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
