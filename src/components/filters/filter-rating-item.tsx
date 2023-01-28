import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUpdateRating } from '../../redux/actions';
import { StateConfig } from '../../const/interfaces';

function FilterRatingItem() {
  const dispatch = useDispatch();

  const selectedRating: string = useSelector(
    (state: StateConfig) => state.selectedRating
  );
  const onChangeRating = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    dispatch(updateUpdateRating(element.value));
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
