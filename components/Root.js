import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import searchTheMovies from '../reducers/search.js';
import store from '../store.js';
import DRT from './DRT.js';

// create a store that has redux-thunk middleware enabled
const finalCreateStore = compose(
  // Enables your middleware:
  applyMiddleware(thunk)
)(createStore);

let theStore = finalCreateStore(searchTheMovies);

export default class Root extends Component {
  render () {
    return (
      <div>
        <Provider store={theStore}>
          <DRT />
        </Provider>
      </div>
    );
  }
};

ReactDOM.render(<Root />, document.getElementById('app'));
