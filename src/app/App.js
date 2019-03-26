import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME.path}
          component={ROUTES.HOME.Component}
        />
      </Switch>
    </Router>
  );
}
