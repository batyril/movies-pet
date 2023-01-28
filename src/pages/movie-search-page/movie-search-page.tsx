import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterGenresItem } from '../../components/filters/filter-genres-item';
import './movie-search-page.sass';
import { FilterRatingItem } from '../../components/filters/filter-rating-item';
import { FilterPopularityItem } from '../../components/filters/filter-popularity-item';
import { Movie, StateConfig } from '../../const/interfaces';
import { MoviesItem } from '../../components/moviesItem/movies-item';
import { filteredPopularityRatingGenres } from '../../utilities/filters';
import { MoviesItemTemplate } from '../../components/moviesItem/movies-item-template';

type MoviesSelectedType = Movie | null;

function MovieSearchPage() {
  const [moviesSelected, setMoviesSelected] =
    useState<MoviesSelectedType>(null);
  const selectedPopularity: string = useSelector(
    (state: StateConfig) => state.selectedPopularity
  );
  const selectedRating: string = useSelector(
    (state: StateConfig) => state.selectedRating
  );
  const selectedGenres: number = useSelector(
    (state: StateConfig) => state.selectedGenres
  );
  const moviesList = useSelector((state: StateConfig) => state.movies);

  const onSubmit = (event: { preventDefault: () => any }) => {
    event.preventDefault();
    const movie: Movie = filteredPopularityRatingGenres(
      selectedPopularity,
      selectedRating,
      selectedGenres,
      moviesList
    );
    setMoviesSelected(movie);
  };

  return (
    <div className='movie-search'>
      <form onSubmit={onSubmit} className='movie-search__form'>
        <h2>Выбери фильм по своим предпочтениям </h2>
        <FilterGenresItem />
        <FilterRatingItem />
        <FilterPopularityItem />
        <button type='submit' className='movie-search__button button'>
          Выбрать фильм
        </button>
      </form>

      <div className='movie-search__film'>
        {moviesSelected ? (
          <MoviesItem moviesData={moviesSelected} />
        ) : (
          <MoviesItemTemplate />
        )}
      </div>
    </div>
  );
}

export { MovieSearchPage };
