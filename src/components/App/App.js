import React from "react";
import "./App.css";
// import Header from "../Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import CV from "../CV/CV";
import Error from "../Error/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" render={() => <About />} exact />
      <Route path="/Projects" render={() => <Projects />} exact />
      <Route path="/CV" render={() => <CV />} exact />
      <Route render={() => <Error />} />
    </Switch>
  );
};

export default App;
