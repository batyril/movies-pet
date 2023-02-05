import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { StateConfig } from '../../const/interfaces';
import { updateSelectedRating } from '../moviesFilter/filters-slice';

function FilterRatingItem() {
  const dispatch = useAppDispatch();

  const selectedRating: string = useAppSelector(
    (state: StateConfig) => state.filters.selectedRating
  );
  const onChangeRating = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    dispatch(updateSelectedRating(element.value));
  };

  return (
    <div className='filter-select '>
      Оценка фильма
      <select onChange={onChangeRating} value={selectedRating} id='rating'>
        <option value='high rating'>Высокая</option>
        <option value='low rating'>Низкая</option>
      </select>
    </div>
  );
}

export { FilterRatingItem };
