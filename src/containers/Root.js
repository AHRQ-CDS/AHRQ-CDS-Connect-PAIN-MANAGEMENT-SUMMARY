import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Landing from '../components/Landing';

const Root = (props) => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </App>
  );
}

Root.displayName = 'Root';

export default Root;
