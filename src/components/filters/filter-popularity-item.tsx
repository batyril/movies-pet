import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateConfig } from '../../const/interfaces';
import { updatePopularity } from '../../redux/actions';

function FilterPopularityItem() {
  const dispatch = useDispatch();

  const selectedPopularity: string = useSelector(
    (state: StateConfig) => state.selectedPopularity
  );
  const onChangePopularity = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    dispatch(updatePopularity(element.value));
  };
  return (
    <div className='filter-select '>
      Популярность
      <select
        onChange={onChangePopularity}
        value={selectedPopularity}
        id='popularity'
      >
        <option value='high popularity'>Высокая </option>
        <option value='low popularity'>Низкая </option>
      </select>
    </div>
  );
}

export { FilterPopularityItem };
