import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore }   from 'react-router-redux';
import { createStore }            from 'redux';

import react_routes               from '../shared/react_routes';
import wooooooColors              from '../shared/reducers';
import App                        from '../shared/components/App';

const initialState = window.__INITIAL_STATE__;

const store = createStore(wooooooColors, initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history } routes={ react_routes } />
  </Provider>,
  document.getElementById('root')
);