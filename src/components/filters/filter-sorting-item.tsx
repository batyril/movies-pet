import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValueSorting } from '../../redux/actions';
import { SortingConfig, StateConfig } from '../../const/interfaces';

function FilterSortingItem() {
  const dispatch = useDispatch();
  const selectedSorting: string = useSelector(
    (state: StateConfig) => state.selectedSorting
  );

  const sortingList: SortingConfig[] = useSelector(
    (state: StateConfig) => state.sorting
  );

  const onChangeSorting = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameSorting = element.value;
    dispatch(updateValueSorting(nameSorting));
  };

  return (
    <div className='filter__sorting'>
      <label htmlFor='sorting'>Сортировать по</label>
      <select onChange={onChangeSorting} value={selectedSorting} id='sorting'>
        {sortingList.map((item) => (
          <option key={item.id} value={item.name}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export { FilterSortingItem };
