import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import DRTState from '../reducers/reducer.js';
import DRT from './DRT.js';

const middlewareStore = applyMiddleware(thunk)(createStore);

const store = middlewareStore(DRTState);

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <DRT />
      </Provider>
    );
  }
};

ReactDOM.render(<Root />, document.getElementById('app'));
