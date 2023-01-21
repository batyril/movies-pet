import { useDispatch } from 'react-redux';
import useHttp from './http.hook';
import {
  filtersFetched,
  moviesFetched,
  sortingFetched,
  yearsFetched,
} from '../redux/actions';
import { GenresConfig, MoviesConfig, YearsConfig } from '../interfaces';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res: MoviesConfig = await request(`http://localhost:3000/movies?`);
    dispatch(moviesFetched(res));
  };

  const getSorting = async () => {
    const res: GenresConfig[] = await request('http://localhost:3000/sorting');
    dispatch(sortingFetched(res));
  };

  const getGenres = async () => {
    const res: GenresConfig[] = await request('http://localhost:3000/genres');
    dispatch(filtersFetched(res));
  };

  const getYears = async () => {
    const res: YearsConfig = await request('http://localhost:3000/years');
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
  };
};

export default useMarvelService;
