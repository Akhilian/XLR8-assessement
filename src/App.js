import React from 'react';
import './App.css';
import Survey from './pages/Survey';
import Start from './pages/Start';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
