import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main"
import Commits from "./Pages/Commits"

function App() {

  return (
      <Router>
          <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/users/:userLogin/:repo/commits" component={Commits} />
              <Route path="/users/:userLogin"  component={Main} />
          </Switch>
      </Router>
  );
}

export default App;
