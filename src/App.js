import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./Pages/Main";
import UserRepos from "./Pages/UserRepos"
import UserDetail from "./Pages/UserDetail"
import RepoCommits from "./Pages/RepoCommits"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:login/" exact component={UserDetail} />
        <Route path="/:login/repos" exact component={UserRepos} />
        <Route path="/:login/:repo/commits" exact component={RepoCommits} />
      </Switch>
    </Router>
  )
}

export default App;