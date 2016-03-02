import React              from 'react'
import { createStore }    from 'redux';
import { Provider }       from 'react-redux';
import { renderToString } from 'react-dom/server';
import wooooooColors      from '../../client/reducers';
import App                from '../../client/components/App';

export default function use_routes(server, router) {
  server.get('/', (req, res) => {
    server_render(req, res);
  });
}

function server_render(req, res) {
  let active = 'BLUE';
  const store = createStore(wooooooColors, { active });

  const html = renderToString(
    <Provider store={ store }>
      <App />
    </Provider>
  );

  const finalState = store.getState();

  const initialEverything = {
    stuff: html,
    initialState: finalState
  };

  res.status(200).render('index', initialEverything);
}