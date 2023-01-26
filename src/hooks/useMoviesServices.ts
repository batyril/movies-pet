import { useDispatch } from 'react-redux';
import useHttp from './http.hook';
import {
  collectionsFetched,
  filtersFetched,
  moviesFetched,
  sortingFetched,
  yearsFetched,
} from '../redux/actions';
import {
  CollectionsConfig,
  GenresConfig,
  MoviesConfig,
  YearsConfig,
} from '../const/interfaces';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();
  const API = 'http://localhost:3000';

  const getMovies = async () => {
    const res: MoviesConfig = await request(`${API}/movies?`);
    dispatch(moviesFetched(res));
  };

  const getSorting = async () => {
    const res: GenresConfig[] = await request(`${API}/sorting`);
    dispatch(sortingFetched(res));
  };

  const getGenres = async () => {
    const res: GenresConfig[] = await request(`${API}/genres`);
    dispatch(filtersFetched(res));
  };

  const getCollections = async () => {
    const res: CollectionsConfig[] = await request(`${API}/collections`);
    dispatch(collectionsFetched(res));
  };

  const getYears = async () => {
    const res: YearsConfig = await request(`${API}/years`);
    dispatch(yearsFetched(res));
  };

  return {
    getMovies,
    getGenres,
    getSorting,
    getYears,
    loading,
    error,
    clearError,
    getCollections,
  };
};

export { useMarvelService };
