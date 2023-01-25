import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionsConfig, StateConfig } from '../../const/interfaces';
import { updateSelectCollections } from '../../redux/actions';

function FilterCollectionsItem() {
  const dispatch = useDispatch();
  const collectionsList: CollectionsConfig[] = useSelector(
    (state: StateConfig) => state.collections
  );

  const selectedCollections = useSelector(
    (state: StateConfig) => state.selectedCollections
  );

  const onChangeCollections = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    const collection = element.value;
    dispatch(updateSelectCollections(collection));
  };
  return (
    <div className='filter__collections'>
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
