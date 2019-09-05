import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import RepoView from './Pages/RepoView';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repo/:username/:nameRepo" component={RepoView} />
      </Switch>
    </Router>
  );
}

export default App;
