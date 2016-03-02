import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import wooooooColors from './reducers';
import App from './components/App';

const initialState = window.__INITIAL_STATE__;

const store = createStore(wooooooColors, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);