import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { GenresConfig, GenresMap, StateConfig } from '../../const/interfaces';

import { updateSelectedGenres } from '../moviesFilter/filters-slice';

function FilterGenresItem() {
  const dispatch = useAppDispatch();

  const genresList: GenresConfig[] = useAppSelector(
    (state: StateConfig) => state.filters.data.genres
  );

  const onChangeGenres = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameGenres = Number(element.value);
    dispatch(updateSelectedGenres(nameGenres));
  };

  const selectedGenres: number = useAppSelector(
    (state: StateConfig) => state.filters.selected.genres
  );
  return (
    <div className='filter__genres filter-select'>
      Жанр
      <select onChange={onChangeGenres} value={selectedGenres} id='genres'>
        {genresList.map(({ id, name }: GenresMap) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { FilterGenresItem };
