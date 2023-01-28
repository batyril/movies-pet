import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateConfig } from '../../const/interfaces';
import { updateValueYears } from '../../redux/actions';

function FilterYearsItem() {
  const selectedYears: number = useSelector(
    (state: StateConfig) => state.selectedYears
  );
  const yearsList: number[] = useSelector(
    (state: StateConfig) => state.filters.years
  );
  const dispatch = useDispatch();
  const onChangeYears = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const numberYears = Number(element.value);
    dispatch(updateValueYears(numberYears));
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
