import { createStore } from 'redux';
import search from '../reducers/search.js';

let store = createStore(search, {});
