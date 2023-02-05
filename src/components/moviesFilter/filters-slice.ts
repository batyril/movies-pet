import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_VALUE } from '../../const';
import { useMoviesServices } from '../../hooks/useMoviesServices';

const initialState = {
  filters: { sorting: [], years: [], collections: [], genres: [] },
  filterLoadingStatus: 'idle',
  selectedPopularity: DEFAULT_VALUE.POPULARITY,
  selectedRating: DEFAULT_VALUE.RATING,
  selectedSorting: DEFAULT_VALUE.SORTING,
  selectedCollections: DEFAULT_VALUE.COLLECTIONS,
  selectedYears: DEFAULT_VALUE.YEARS,
  selectedGenres: DEFAULT_VALUE.GENRES,
  authorization: false,
  selectedPage: DEFAULT_VALUE.SELECTED_PAGE,
  countMoviesPage: DEFAULT_VALUE.COUNT_MOVIES_PAGE,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSelectedGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
    updateSelectedCollections: (state, action) => {
      state.selectedCollections = action.payload;
    },
    updateSelectedYears: (state, action) => {
      state.selectedYears = action.payload;
    },
    updateSelectedSorting: (state, action) => {
      state.selectedSorting = action.payload;
    },
    updateSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
    },
    updateSelectedPopularity: (state, action) => {
      state.selectedPopularity = action.payload;
    },
    updateAuthorization: (state, action) => {
      state.authorization = action.payload;
    },
  },
  extraReducers: (builder) => {
    const { fetchFilters } = useMoviesServices();
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filterLoadingStatus = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filterLoadingStatus = 'idle';
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filterLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = filtersSlice;

export const {
  updateSelectedGenres,
  updateSelectedCollections,
  updateSelectedYears,
  updateSelectedPopularity,
  updateSelectedRating,
  updateSelectedSorting,
  updateAuthorization,
} = actions;

export { reducer };
