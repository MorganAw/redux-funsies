import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore }   from 'react-router-redux';

import configStore                from '../shared/store/store';
import react_routes               from '../shared/react_routes';
import App                        from '../shared/components/App';

const initialState = window.__INITIAL_STATE__;

const store = configStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history } routes={ react_routes } />
  </Provider>,
  document.getElementById('root')
);