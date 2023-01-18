import { genresList, yearsList } from '../../services/filters';

interface State {
  genres: string[];
  years: number[];
}

const initialState: State = {
  genres: genresList,
  years: yearsList,
};

export const reducer = (state: State = initialState) => state;
