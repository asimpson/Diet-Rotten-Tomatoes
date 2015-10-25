import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import DRTState from '../reducers/reducer.js';
import DRT from './DRT.js';

const store = createStore(DRTState);

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
