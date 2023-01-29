import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { MoviesItem } from '../moviesItem/movies-item';
import './movies-list.sass';
import { StateConfig } from '../../const/interfaces';
import { getFilterMovies } from '../../utilities/filters';

function MoviesList() {
  const filterMoviesListSelector = createSelector(
    (state: StateConfig) => state.selectedSorting,
    (state: StateConfig) => state.selectedYears,
    (state: StateConfig) => state.selectedGenres,
    (state: StateConfig) => state.selectedCollections,
    (state: StateConfig) => state.movies,
    (state: StateConfig) => state.watchLater,
    (state: StateConfig) => state.favoriteMovies,
    (
      selectedSorting,
      selectedYears,
      selectedGenres,
      selectedCollections,
      movies,
      watchLater,
      favoriteMovies
    ) =>
      getFilterMovies(
        movies,
        selectedSorting,
        selectedYears,
        selectedGenres,
        selectedCollections,
        watchLater,
        favoriteMovies
      )
  );

  const filterMoviesList = useSelector(filterMoviesListSelector);

  const selectedPage = useSelector((state: StateConfig) => state.selectedPage);
  const countMoviesPage = useSelector(
    (state: StateConfig) => state.countMoviesPage
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
