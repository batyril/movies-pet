import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionsConfig, StateConfig } from '../../const/interfaces';
import { updateSelectCollections } from '../../redux/actions';
import { useMoviesServices } from '../../hooks/useMoviesServices';

function FilterCollectionsItem() {
  const { getWatchLater, getFavoriteMovies } = useMoviesServices();
  const dispatch = useDispatch();
  const collectionsList: CollectionsConfig[] = useSelector(
    (state: StateConfig) => state.filters.collections
  );
  const selectedCollections = useSelector(
    (state: StateConfig) => state.selectedCollections
  );

  useEffect(() => {
    getWatchLater();
    getFavoriteMovies();
  }, [selectedCollections]);

  const onChangeCollections = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const collection = element.value;
    dispatch(updateSelectCollections(collection));
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
