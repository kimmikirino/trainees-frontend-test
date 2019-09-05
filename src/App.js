import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHook from "./Pages/MainHook"


function App() {

  return (
      <Router>
          <Switch>
              <Route path="/"  component={MainHook} />
              <Route path="/users/:userLogin"  component={MainHook} />
          </Switch>
      </Router>

  );
}

export default App;
