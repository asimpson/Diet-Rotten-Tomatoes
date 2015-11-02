import 'babel-core/polyfill';
import { SEARCH_MOVIE, RECIEVED_DVD, RECIEVED_MOVIES, CLEAR_SEARCH } from '../actions/actions.js'; 

const initialState = {
  searched: [],
  boxoffice: [],
  dvd: []
};

function DRTState(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return Object.assign({}, state, {
        searched: action.movies
      });  
    case "RECIEVED_MOVIES":
      return Object.assign({}, state, {
        boxoffice: action.movies
      });  
    case "RECIEVED_DVD":
      return Object.assign({}, state, {
        dvd: action.movies
      });  
    case "CLEAR_SEARCH":
      return Object.assign({}, state, {
        searched: []
      });  
    default:
      return state;
    }
}

export default DRTState;
