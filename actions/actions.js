export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const RECIEVED_MOVIES = 'RECIEVED_MOVIES';
export const RECIEVED_DVD = 'RECIEVED_DVD';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
import JSONP from 'browser-jsonp';

const key = 'bfsqfcdktj8yt8bvu2d2fzq2'
const apiEndpoint = 'http://api.rottentomatoes.com/api/public/v1.0'
const dvdUrl = `${apiEndpoint}/lists/dvds/top_rentals.json?apikey=${key}&limit=5&country=us`;
const boxOfficeUrl = `${apiEndpoint}/lists/movies/box_office.json?apikey=${key}&limit=5&country=us`;
const searchUrl = `${apiEndpoint}/movies.json?apikey=${key}&limit=5&country=us&q=`; 

export function searchRT(movies) {
  return { type: SEARCH_MOVIE, movies };
}

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}

export function recievedDVD(movies) {
  return { type: RECIEVED_DVD, movies};
}

export function recievedMovies(movies) {
  return { type: RECIEVED_MOVIES, movies};
}

export function fetchDVD() {
  return dispatch => {
      JSONP({
        url: dvdUrl,
        success: (data) => { 
          dispatch(recievedDVD(data.movies.slice(0,5)));
        }
      });
  }
}

export function fetchMovies() {
  return dispatch => {
      JSONP({
        url: boxOfficeUrl,
        success: (data) => { 
          dispatch(recievedMovies(data.movies.slice(0,5)));
        }
      });
  }
}

export function searchMovies(searchText) {
  const url = `${searchUrl}${searchText}`;

  return dispatch => {
      JSONP({
        url: url,
        success: (data) => { 
          dispatch(searchRT(data.movies));
        }
      });
  }
}
