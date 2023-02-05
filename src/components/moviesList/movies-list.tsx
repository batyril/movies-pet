import React from 'react';
import { useAppSelector } from '../../redux/store';
import { MoviesItem } from '../moviesItem/movies-item';
import './movies-list.sass';
import { StateConfig } from '../../const/interfaces';
import { getFilterMovies } from '../../utilities/filters';

function MoviesList() {
  const filterMoviesList = useAppSelector((state: StateConfig) =>
    getFilterMovies(
      state.movies.movies,
      state.filters.selectedSorting,
      state.filters.selectedYears,
      state.filters.selectedGenres,
      state.filters.selectedCollections,
      state.movies.watchLater,
      state.movies.favoriteMovies
    )
  );

  const selectedPage = useAppSelector(
    (state: StateConfig) => state.pagination.selectedPage
  );
  const countMoviesPage = useAppSelector(
    (state: StateConfig) => state.pagination.countMoviesPage
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
