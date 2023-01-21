import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviesItem from '../moviesItem/MoviesItem';
import './MoviesList.sass';
import useMarvelService from '../../hooks/useMoviesServices';
import { Movie, StateConfig } from '../../interfaces';

function MoviesList() {
  const { getMovies } = useMarvelService();
  const moviesList = useSelector((state: StateConfig) => state.movies);
  const valueSorting = useSelector((state: StateConfig) => state.valueSorting);
  const valueYears = useSelector((state: StateConfig) => state.valueYears);
  const selectedGenres: number = useSelector(
    (state: StateConfig) => state.selectedGenres
  );
  const getFilterMovies = (movies: Movie[], sorting: string, years: number) => {
    switch (sorting) {
      case 'popular down':
        return movies
          .filter((item) => item.release_date.includes(String(years)))
          .filter((item) =>
            selectedGenres === 0
              ? true
              : item.genre_ids.includes(selectedGenres)
          )
          .sort((prev, next) => prev.popularity - next.popularity);
      case 'popular up':
        return movies
          .filter((item) => item.release_date.includes(String(years)))
          .filter((item) =>
            selectedGenres === 0
              ? true
              : item.genre_ids.includes(selectedGenres)
          )
          .sort((prev, next) => prev.popularity - next.popularity)
          .reverse();
      case 'rating up':
        return movies
          .filter((item) => item.release_date.includes(String(years)))
          .filter((item) =>
            selectedGenres === 0
              ? true
              : item.genre_ids.includes(selectedGenres)
          )
          .sort((prev, next) => prev.vote_average - next.vote_average);

      case 'rating down':
        return movies
          .filter((item) => item.release_date.includes(String(years)))
          .filter((item) =>
            selectedGenres === 0
              ? true
              : item.genre_ids.includes(selectedGenres)
          )
          .sort((prev, next) => prev.vote_average - next.vote_average)
          .reverse();
      default:
        return movies;
    }
  };

  const filterMoviesList = getFilterMovies(
    moviesList,
    valueSorting,
    valueYears
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

export default MoviesList;
