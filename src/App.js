import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHook from "./Pages/MainHook"
import Commits from "./Pages/Commits"

function App() {

  return (
      <Router>
          <Switch>
              <Route path="/" exact component={MainHook} />
              <Route path="/users/:userLogin/:repo/commits" component={Commits} />
              <Route path="/users/:userLogin"  component={MainHook} />

          </Switch>
      </Router>
  );
}

export default App;
