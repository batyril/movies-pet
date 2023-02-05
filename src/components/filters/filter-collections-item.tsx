import React, { FormEvent, useEffect } from 'react';
import { CollectionsConfig, StateConfig } from '../../const/interfaces';
import { updateSelectedCollections } from '../moviesFilter/filters-slice';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { useMoviesServices } from '../../hooks/useMoviesServices';

function FilterCollectionsItem() {
  const { fetchWatchLater, fetchFavoriteMovies } = useMoviesServices();
  const dispatch = useAppDispatch();
  const collectionsList: CollectionsConfig[] = useAppSelector(
    (state: StateConfig) => state.filters.filters.collections
  );
  const selectedCollections = useAppSelector(
    (state: StateConfig) => state.filters.selectedCollections
  );

  useEffect(() => {
    dispatch(fetchWatchLater());
    dispatch(fetchFavoriteMovies());
  }, [selectedCollections]);

  const onChangeCollections = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const collection = element.value;
    dispatch(updateSelectedCollections(collection));
  };
  return (
    <div className='filter__collections filter-select'>
      Коллекции
      <select
        onChange={onChangeCollections}
        value={selectedCollections}
        id='collections'
      >
        {collectionsList.map(({ id, name, text }) => (
          <option key={id} value={name}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export { FilterCollectionsItem };
