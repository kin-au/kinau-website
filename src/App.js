/* istanbul ignore file */

import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

const App = ({ location }) => {
  return (
    <>
      <SC.App>
        <div className="leftColumn">
          <Header />
          <ContactInfo />
        </div>
        <div className="rightColumn">
          <MobileNav />
          <Navbar />
          <TransitionGroup component={null}>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 500, exit: 500 }}
              classNames={"fade"}
            >
              <Switch location={location}>
                <Route path="/About" component={About} exact />
                <Route path="/Projects" component={Projects} exact />
                <Route path="/CV" component={CV} exact />
                <Route path="/Contact" component={Contact} exact />
                <Route path="/" component={About} exact />
                <Route component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </SC.App>
      <Footer />
    </>
  );
};

export default withRouter(App);
