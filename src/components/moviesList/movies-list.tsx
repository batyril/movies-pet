import React from 'react';
import { useAppSelector } from '../../redux/store';
import { MoviesItem } from '../moviesItem/movies-item';
import './movies-list.sass';
import { StateConfig } from '../../const/interfaces';
import { getFilterMovies } from '../../utilities/filters';

function MoviesList() {
  const filterMoviesList = useAppSelector((state: StateConfig) =>
    getFilterMovies(
      state.movies.data,
      state.filters.selected.sorting,
      state.filters.selected.years,
      state.filters.selected.genres,
      state.filters.selected.collections,
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
