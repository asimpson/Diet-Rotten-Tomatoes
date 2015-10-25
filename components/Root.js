import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import searchTheMovies from '../reducers/search.js';
import store from '../store/store.js';
import DRT from './DRT.js';

const theStore = createStore(searchTheMovies);

export default class Root extends Component {
  render () {
    return (
      <Provider store={theStore}>
        <DRT />
      </Provider>
    );
  }
};

ReactDOM.render(<Root />, document.getElementById('app'));
