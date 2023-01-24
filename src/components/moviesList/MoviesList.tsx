import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MoviesItem } from '../moviesItem/MoviesItem';
import './MoviesList.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import { Movie, StateConfig } from '../../const/interfaces';
import {
  filterYearsGenresCollections,
  filterPopularityDown,
  filterPopularityUp,
  filterRatingUp,
  filterRatingDown,
} from '../../utilities/filters';

function MoviesList() {
  const { getMovies } = useMarvelService();
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
          filterYearsGenresCollections(years, genres, collections, movies)
        );
      case 'popular up':
        return filterPopularityUp(
          filterYearsGenresCollections(years, genres, collections, movies)
        );
      case 'rating up':
        return filterRatingUp(
          filterYearsGenresCollections(years, genres, collections, movies)
        );
      case 'rating down':
        return filterRatingDown(
          filterYearsGenresCollections(years, genres, collections, movies)
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

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='movies__list'>
      {filterMoviesList.map((item) => (
        <MoviesItem key={item.id} moviesData={item} />
      ))}
    </div>
  );
}

export { MoviesList };
