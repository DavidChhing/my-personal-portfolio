import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import styles from './App.scss';

export default function App() {
  return (
    <main className={styles.App}>
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.HOME.path}
            component={ROUTES.HOME.Component}
          />
        </Switch>
      </Router>
    </main>
  );
}
