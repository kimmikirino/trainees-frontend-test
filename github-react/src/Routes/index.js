import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main.js';
import UserView from '../Pages/UserView.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/usuario/:id" component={UserView} />
      </Switch>
    </Router>
  );
}

export default Routes;