import React from 'react';
import { useSelector } from 'react-redux';
import { MoviesItem } from '../moviesItem/movies-item';
import './movies-list.sass';
import { Movie, StateConfig } from '../../const/interfaces';
import {
  filterYearsGenresCollections,
  filterPopularityDown,
  filterPopularityUp,
  filterRatingUp,
  filterRatingDown,
} from '../../utilities/filters';

function MoviesList() {
  const moviesList = useSelector((state: StateConfig) => state.movies);
  const selectedSorting = useSelector(
    (state: StateConfig) => state.selectedSorting
  );
  const selectedYears = useSelector(
    (state: StateConfig) => state.selectedYears
  );
  const selectedGenres: number = useSelector(
    (state: StateConfig) => state.selectedGenres
  );
  const selectedCollections: string = useSelector(
    (state: StateConfig) => state.selectedCollections
  );
  const selectedPage = useSelector((state: StateConfig) => state.selectedPage);
  const countMoviesPage = useSelector(
    (state: StateConfig) => state.countMoviesPage
  );

  const watchLater = useSelector((state: StateConfig) => state.watchLater);
  const favoriteMovies = useSelector(
    (state: StateConfig) => state.favoriteMovies
  );

  const getFilterMovies = (
    movies: Movie[],
    sorting: string,
    years: number,
    genres: number,
    collections: string
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

  const filterMoviesList = getFilterMovies(
    moviesList,
    selectedSorting,
    selectedYears,
    selectedGenres,
    selectedCollections
  );
  const lastMovieIndex = selectedPage * countMoviesPage;
  const firstMoviesIndex = lastMovieIndex - countMoviesPage;

  return (
    <div className='movies__list'>
      {filterMoviesList
        .map((item) => <MoviesItem key={item.id} moviesData={item} />)
        .slice(firstMoviesIndex, lastMovieIndex)}
    </div>
  );
}

export { MoviesList };
