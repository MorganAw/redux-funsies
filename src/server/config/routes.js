import React                          from 'react'
import { Provider }                   from 'react-redux';
import { match,
         createMemoryHistory,
         RouterContext }              from 'react-router';
import { syncHistoryWithStore }       from 'react-router-redux';
import { renderToString }             from 'react-dom/server';

import configStore                    from '../../shared/store/store';
import react_routes                   from '../../shared/react_routes';
import active                         from '../../shared/reducers/active';
import App                            from '../../shared/components/App';

export default function use_routes(server, router) {
  server.use((req, res, next) => {
    console.log('***** Handling \'%s\' request at route \'%s\' *****', req.method, req.url);
    next();
  });

  server.get('/', (req, res) => {
    server_render(req, res);
  });

  server.get('/backbutton', (req, res) => {
    server_render(req, res);
  });
}

function server_render(req, res) {
  let active_color = 'BLUE';

  const memoryHistory = createMemoryHistory(req.url);
  const store = configStore(memoryHistory, { active: active_color });
  const history = syncHistoryWithStore(memoryHistory, store);

  match(
    { history, routes: react_routes , location: req.url },
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
      } else {
        res.status(404).send('Not Found');
      }
  });
}