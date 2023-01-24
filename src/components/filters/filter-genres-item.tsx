import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenresConfig, GenresMap, StateConfig } from '../../const/interfaces';
import { updateSelectGenres } from '../../redux/actions';

function FilterGenresItem() {
  const dispatch = useDispatch();
  const genresList: GenresConfig[] = useSelector(
    (state: StateConfig) => state.genres
  );

  const onChangeGenres = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameGenres = Number(element.value);
    dispatch(updateSelectGenres(nameGenres));
  };

  const selectedGenres: number = useSelector(
    (state: StateConfig) => state.selectedGenres
  );
  return (
    <div className='filter__genres'>
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
