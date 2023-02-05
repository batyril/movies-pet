import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_VALUE } from '../../const';

const initialState = {
  selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
  countMoviesPage: DEFAULT_VALUE.COUNT_MOVIES_PAGE,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    updateSelectedPage: (state, action) => {
      state.selectedPage = action.payload
        ? state.selectedPage + 1
        : state.selectedPage - 1;
    },
    resetSelectedPage: (state) => {
      state.selectedPage = DEFAULT_VALUE.SELECTED_PAGE;
    },
  },
});

const { actions, reducer } = paginationSlice;

export const { updateSelectedPage, resetSelectedPage } = actions;

export { reducer };
