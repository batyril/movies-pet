import { Movie } from '../const/interfaces';

export const nameLocalStorage = {
  favorites: 'favorites',
  seeLater: 'seeLater',
};
export function updateLocalStorage(name: string, value: Movie) {
  const items = localStorage.getItem(name);

  if (items !== null) {
    const itemsParse = JSON.parse(items);

    if (itemsParse.find((movies: Movie) => movies.id === value.id)) {
      const deleteMovies = itemsParse.filter(
        (movie: Movie) => movie.id !== value.id
      );
      const stringData = JSON.stringify([...deleteMovies]);
      localStorage.setItem(name, stringData);
    } else {
      const stringData = JSON.stringify([...itemsParse, value]);
      localStorage.setItem(name, stringData);
    }
  } else {
    const stringData = JSON.stringify([value]);
    localStorage.setItem(name, stringData);
  }
}

export function getLocalStorage(name: string): null | Movie[] {
  const item = localStorage.getItem(name);
  if (item !== null) {
    return JSON.parse(item);
  }
  return null;
}
