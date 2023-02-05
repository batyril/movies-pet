import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { reducer as movies } from '../components/moviesList/movies-slice';
import { reducer as filters } from '../components/moviesFilter/filters-slice';
import { reducer as pagination } from '../components/pagination/pagination-slice';

const store = configureStore({
  reducer: { filters, movies, pagination },
  /*  devTools: process.env.NODE_ENV !== 'production', */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
