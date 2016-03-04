import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore }   from 'react-router-redux';
import { createStore }            from 'redux';

import { compose, applyMiddleware, combineReducers }        from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import active                     from '../shared/reducers/active';

import react_routes               from '../shared/react_routes';
import wooooooColors              from '../shared/reducers';
import App                        from '../shared/components/App';

const initialState = window.__INITIAL_STATE__;

// const store = createStore(wooooooColors, initialState);
const store = createStore(
  combineReducers({
    active: active,
    routing: routerReducer
  }),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    )
  )
);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history } routes={ react_routes } />
  </Provider>,
  document.getElementById('root')
);