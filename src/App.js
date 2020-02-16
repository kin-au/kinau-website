/* istanbul ignore file */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import CV from "./containers/CV/CV";
import Contact from "./containers/Contact/Contact";
import Error from "./containers/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" render={() => <About />} exact />
        <Route path="/About" render={() => <About />} exact />
        <Route path="/Projects" render={() => <Projects />} exact />
        <Route path="/CV" render={() => <CV />} exact />
        <Route path="/Contact" render={() => <Contact exact />} />
        <Route render={() => <Error />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
