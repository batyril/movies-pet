import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { updateSelectedSorting } from '../moviesFilter/filters-slice';
import { SortingConfig, StateConfig } from '../../const/interfaces';

function FilterSortingItem() {
  const dispatch = useAppDispatch();
  const selectedSorting: string = useAppSelector(
    (state: StateConfig) => state.filters.selected.sorting
  );

  const sortingList: SortingConfig[] = useAppSelector(
    (state: StateConfig) => state.filters.data.sorting
  );

  const onChangeSorting = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const nameSorting = element.value;
    dispatch(updateSelectedSorting(nameSorting));
  };

  return (
    <div className='filter__sorting filter-select'>
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
