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
    server_render(req, res);
  });
}

function server_render(req, res) {
  let active = 'BLUE';

  const memoryHistory = createMemoryHistory(req.url);
  const store = createStore(
    combineReducers({
      active,
      routing: routerReducer
    }),
    { active },
    compose(
      applyMiddleware(
        routerMiddleware(memoryHistory)
      )
    )
  );
  const history = syncHistoryWithStore(memoryHistory, store);

  match(
    { history, react_routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
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

        res.status(200).render('index', initialEverything);
      }
  });
}