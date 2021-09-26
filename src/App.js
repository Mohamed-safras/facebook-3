import React from "react";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../src/components/About";
import Project from "../src/components/Project";
import Resume from "../src/components/Resume";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Router>
            <Redirect to="/" />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
