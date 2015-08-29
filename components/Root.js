import React, { Component } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { devTools, persistState } from 'redux-devtools';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import searchTheMovies from '../reducers/search.js';
import store from '../store.js';
import DRT from './DRT.js';

// create a store that has redux-thunk middleware enabled
const finalCreateStore = compose(
  // Enables your middleware:
  applyMiddleware(thunk),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
let theStore = finalCreateStore(searchTheMovies);

export default class Root extends Component {
  render () {
    return (
      <div>
        <Provider store={theStore}>
          {() => <DRT />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={theStore} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
};

React.render(<Root />, document.getElementById('app'));
