import React from "react";
import "./App.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import CV from "../CV/CV";
import Contact from "../Contact/Contact";
import Error from "../Error/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" render={() => <About />} exact />
      <Route path="/About" render={() => <About />} />
      <Route path="/Projects" render={() => <Projects />} />
      <Route path="/CV" render={() => <CV />} />
      <Route path="/Contact" render={() => <Contact />} />
      <Route render={() => <Error />} />
    </Switch>
  );
};

export default App;
