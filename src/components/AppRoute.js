import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CharListContainer from './CharListContainer';
import CharDisplayContainer from './CharDisplayContainer';
import CharEditContainer from './CharEditContainer';

export const AppRoute = () => {
  return (
  <Switch>
    <Route exact path="/" component={CharListContainer} />
    <Route exact path="/char-display-container-:id" component={CharDisplayContainer} />
    <Route exact path="/char-edit-container-:id" component={CharEditContainer} />
  </Switch>
  )
}

export default AppRoute;
