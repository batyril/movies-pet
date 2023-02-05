import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { StateConfig } from '../../const/interfaces';
import { updateSelectedYears } from '../moviesFilter/filters-slice';

function FilterYearsItem() {
  const dispatch = useAppDispatch();
  const selectedYears: number = useAppSelector(
    (state: StateConfig) => state.filters.selected.years
  );
  const yearsList: number[] = useAppSelector(
    (state: StateConfig) => state.filters.data.years
  );

  const onChangeYears = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const numberYears = Number(element.value);
    dispatch(updateSelectedYears(numberYears));
  };

  return (
    <div className='filter__years filter-select'>
      <label htmlFor='years'>Год релиза</label>
      <select onChange={onChangeYears} value={selectedYears} id='years'>
        {yearsList.map((item: number) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export { FilterYearsItem };
