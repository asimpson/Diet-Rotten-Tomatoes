export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export default function searchRT(movie) {
  return { type: SEARCH_MOVIE, movie };
}
