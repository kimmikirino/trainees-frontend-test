import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Pages/Main'
import './App.css'

function App() {
    return(
     <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="users/:user" component={Main} />
        </Switch>
     </Router>
   );
 }
 
 export default App;

