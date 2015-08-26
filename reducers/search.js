import 'babel-core/polyfill';
import SEARCH_MOVIE from '../actions/actions.js'; 

function searchTheMovies(state = {}, action) {
  switch (action.type) {
  case "SEARCH_MOVIE":
    return Object.assign({}, state, {
      searched: action.movie
    });  
  default:
    return state;
  }
}

export default searchTheMovies;
