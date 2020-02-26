/* istanbul ignore file */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import MobileNav from "./components/MobileNav/MobileNav";
import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import CV from "./containers/CV/CV";
import Contact from "./containers/Contact/Contact";
import Error from "./containers/Error/Error";
import Footer from "./components/Footer/Footer";
import * as SC from "./App.style";

const App = () => {
  return (
    <>
      <SC.App>
        <BrowserRouter>
          <div className="leftColumn">
            <Header />
            <ContactInfo />
          </div>
          <div className="rightColumn">
            <MobileNav />
            <Navbar />
            <Switch>
              <Route path="/About" component={About} exact />
              <Route path="/Projects" component={Projects} exact />
              <Route path="/CV" component={CV} exact />
              <Route path="/Contact" component={Contact} exact />
              <Route path="/" component={About} exact />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </SC.App>
      <Footer />
    </>
  );
};

export default App;
