import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ROUTES } from '../routes';
import styles from './App.scss';

class App extends PureComponent {
  render() {
    const { HOME, PROJECTS, ABOUT, CONTACT } = ROUTES;
    return (
      <main className={styles.App}>
        <Router>
          <Switch>
            <Route exact path={HOME.path} component={HOME.Component} />
            <Route path={PROJECTS.path} component={PROJECTS.Component} />
            <Route path={ABOUT.path} component={ABOUT.Component} />
            <Route path={CONTACT.path} component={CONTACT.Component} />
            <Redirect to={HOME.path} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
