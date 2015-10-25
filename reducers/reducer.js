import 'babel-core/polyfill';
import { SEARCH_MOVIE, FETCH_DVD, FETCH_BOXOFFICE } from '../actions/actions.js'; 

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
    case "FETCH_BOXOFFICE":
      return Object.assign({}, state, {
        boxoffice: action.movies
      });  
    case "FETCH_DVD":
      return Object.assign({}, state, {
        dvd: action.movies
      });  
    default:
      return state;
    }
}

export default DRTState;
