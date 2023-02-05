import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_VALUE } from '../../const';
import { useMoviesServices } from '../../hooks/useMoviesServices';

const initialState = {
  data: { sorting: [], years: [], collections: [], genres: [] },
  filterLoadingStatus: 'idle',
  selected: {
    popularity: DEFAULT_VALUE.POPULARITY,
    rating: DEFAULT_VALUE.RATING,
    sorting: DEFAULT_VALUE.SORTING,
    collections: DEFAULT_VALUE.COLLECTIONS,
    years: DEFAULT_VALUE.YEARS,
    genres: DEFAULT_VALUE.GENRES,
  },
  authorization: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSelectedGenres: (state, action) => {
      state.selected.genres = action.payload;
    },
    updateSelectedCollections: (state, action) => {
      state.selected.collections = action.payload;
    },
    updateSelectedYears: (state, action) => {
      state.selected.years = action.payload;
    },
    updateSelectedSorting: (state, action) => {
      state.selected.sorting = action.payload;
    },
    updateSelectedRating: (state, action) => {
      state.selected.rating = action.payload;
    },
    updateSelectedPopularity: (state, action) => {
      state.selected.popularity = action.payload;
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
        state.data = action.payload;
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
