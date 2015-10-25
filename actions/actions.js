export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_BOXOFFICE = 'FETCH_BOXOFFICE';
export const FETCH_DVD = 'FETCH_DVD';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export function searchRT(movies) {
  return { type: SEARCH_MOVIE, movies };
}

export function fetchBoxOffice(movies) {
  return { type: FETCH_BOXOFFICE, movies };
}

export function fetchDVD(movies) {
  return { type: FETCH_DVD, movies};
}

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}
