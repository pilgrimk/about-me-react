import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './navigation';
import Home from './home';
import AboutMe from './about-me';
import WorkExperience from './work-experience';
import Sandbox from './sandbox';
import MyFooter from './footer';

function NoMatch() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/work-experience">
            <WorkExperience />
          </Route>
          <Route path="/sandbox">
            <Sandbox />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
