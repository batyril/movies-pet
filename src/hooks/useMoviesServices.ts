import { useDispatch } from 'react-redux';
import useHttp from './http.hook';
import { filtersFetched, moviesFetched, yearsFetched } from '../redux/actions';
import { GenresConfig, MoviesConfig, YearsConfig } from '../interfaces';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();

  const getMovies = async (indexFilm: number) => {
    const countMoviesPage = 8;
    const res: MoviesConfig = await request(
      `http://localhost:3000/movies?_start=${indexFilm}&_end=${
        indexFilm + countMoviesPage
      }`
    );
    dispatch(moviesFetched(res));
  };

  const getGenres = async () => {
    const res: GenresConfig[] = await request('http://localhost:3000/genres');
    dispatch(filtersFetched(res));
  };

  const getYears = async () => {
    const res: YearsConfig = await request('http://localhost:3000/years');
    dispatch(yearsFetched(res));
  };

  return { getMovies, getGenres, getYears, loading, error, clearError };
};

export default useMarvelService;
