import React                          from 'react'
import { compose,
         createStore,
         combineReducers,
         applyMiddleware }            from 'redux';
import { Provider }                   from 'react-redux';
import { match,
         createMemoryHistory,
         RouterContext }              from 'react-router';
import { syncHistoryWithStore,
         routerReducer,
         routerMiddleware }           from 'react-router-redux';
import { renderToString }             from 'react-dom/server';

import react_routes                   from '../../shared/react_routes';
import active                         from '../../shared/reducers/active';
import App                            from '../../shared/components/App';

export default function use_routes(server, router) {
  server.get('/', (req, res) => {
    console.log('got request');
    server_render(req, res);
  });
}

function server_render(req, res) {
  let active_color = 'BLUE';

  const memoryHistory = createMemoryHistory(req.url);
  const store = createStore(
    combineReducers({
      active: active,
      routing: routerReducer
    }),
    { active: active_color },
    compose(
      applyMiddleware(
        routerMiddleware(memoryHistory)
      )
    )
  );
  const history = syncHistoryWithStore(memoryHistory, store);

  console.log('before match');
  console.log('history', history);
  console.log('react_routes', react_routes);
  console.log('req.url', req.url);

  match(
    { history, routes: react_routes , location: req.url },
    (error, redirectLocation, renderProps) => {
      console.log('matched', error, redirectLocation, renderProps);
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        console.log('Before renderToString');
        const content = renderToString(
          <Provider store={ store }>
            <RouterContext { ...renderProps } />
          </Provider>
        );

        const finalState = store.getState();

        const initialEverything = {
          stuff: content,
          initialState: finalState
        };

        console.log('before render');
        res.status(200).render('index', initialEverything);
      } else {
        res.status(404).send('Not Found');
      }
  });
}