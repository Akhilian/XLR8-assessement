import React from 'react';
import './App.css';
import Survey from './pages/Survey';
import Start from './pages/Start';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/survey/:surveyId" component={Survey} />
          <Route path="/start/:surveyId" component={Start} />
          <Route path="/results/:surveyId" component={Results} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
