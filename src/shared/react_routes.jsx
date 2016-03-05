import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './components/App';
import Buttons                  from './components/presentation/Buttons';
import BackOnly                 from './components/presentation/BackOnly';

const react_routes = (
  <Route path="/" component={ App }>
   <IndexRoute component={ Buttons } />
   <Route path="backbutton" component={ BackOnly } />
 </Route>
);

export default react_routes;