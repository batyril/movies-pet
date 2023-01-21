import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { StateConfig } from './interfaces';

const filterMoviesSelector = createSelector(
  (state: StateConfig) => state.valueSorting,
  (state: StateConfig) => state.movies,
  (valueSorting, movies) => {
    console.log(5);
    switch (valueSorting) {
      case 'popular down':
        return movies.sort((prev, next) => prev.popularity - next.popularity);
      case 'popular up':
        return movies
          .sort((prev, next) => prev.popularity - next.popularity)
          .reverse();
      case 'rating up':
        return movies.sort(
          (prev, next) => prev.vote_average - next.vote_average
        );
      case 'rating down':
        return movies
          .sort((prev, next) => prev.vote_average - next.vote_average)
          .reverse();
      default:
        return movies;
    }
  }
);

const filterMovies = useSelector(filterMoviesSelector);
