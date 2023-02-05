import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { StateConfig } from '../../const/interfaces';
import { updateSelectedPopularity } from '../moviesFilter/filters-slice';

function FilterPopularityItem() {
  const dispatch = useAppDispatch();

  const selectedPopularity: string = useAppSelector(
    (state: StateConfig) => state.filters.selectedPopularity
  );
  const onChangePopularity = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    dispatch(updateSelectedPopularity(element.value));
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
