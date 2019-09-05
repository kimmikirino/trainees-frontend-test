import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Pages/Main'
import ShowRepos from './Pages/ShowRepos'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/repos" exact component={ShowRepos} />
      </Router>
    </div>
  );
}

export default App;
