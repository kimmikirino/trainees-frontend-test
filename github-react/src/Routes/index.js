import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main.js';
import UserView from '../Pages/UserView.js';
import CommitsView from '../Pages/CommitsView.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:usuario/:id" exact component={UserView} />
        <Route path="/:usuario/:id/:repositorio/commits" component={CommitsView} />
      </Switch>
    </Router>
  );
}

export default Routes;