import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Main from './Pages/Main'
import Repos from './Pages/Repos'
import UserInfo from './Pages/UserInfo'
import UserRepo from './Pages/UserRepo'
import UserCommits from './Pages/UserCommits'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/repos' exact component={Repos}/>
        <Route path='/:login' exact component={UserInfo}/>
        <Route path='/:login/repos' exact component={UserRepo}/>
        <Route path='/:login/repos/:id/commits' component={UserCommits}/>
      </Switch>
    </Router>
  );
}

export default App;
