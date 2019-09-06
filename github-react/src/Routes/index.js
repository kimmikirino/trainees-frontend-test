import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main.js';
import UserView from '../Pages/UserView.js';
import CommitsView from '../Pages/CommitsView.js';
import AboutView from '../Pages/AboutView.js';
import EquipeView from '../Pages/EquipeView.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:usuario/:id" exact component={UserView} />
        <Route path="/:usuario/:id/:repositorio/commits" exact component={CommitsView} />
        <Route path="/sobre" component={AboutView} />
        <Route path="/equipe" component={EquipeView} />
      </Switch>
    </Router>
  );
}
export default Routes;