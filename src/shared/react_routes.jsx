import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './components/App';
// import Buttons                  from ;
// import Deadend                  from ;

const react_routes = (
  <Route path="/" component={ App }>
    {/* <IndexRoute component={ Buttons }/> */}
  </Route>
);

export default react_routes;