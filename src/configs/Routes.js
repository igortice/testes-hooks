import { Route, Switch } from 'react-router-dom';

import React from 'react';
import ReactHooksInterval from '../pages/ReactHooksInterval';

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <ReactHooksInterval />
    </Route>
  </Switch>
);

export default Routes;
