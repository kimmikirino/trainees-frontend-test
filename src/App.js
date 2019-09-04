import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./Pages/Main";
import UserRepos from "./Pages/UserRepos"



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:login/repos" component={UserRepos} />
      </Switch>
    </Router>
  )
}

export default App;