/* istanbul ignore file */

import React, { useEffect } from "react";
import { Route, useLocation, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header/Header";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import MobileNav from "./components/MobileNav/MobileNav";
import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import CV from "./containers/CV/CV";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Error from "./containers/Error/Error";
import Footer from "./components/Footer/Footer";
import * as SC from "./App.style";

function Scroll(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(Scroll);

const App = ({ location }) => {
  return (
    <>
      <SC.App>
        <ScrollToTop>
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
                timeout={{ enter: 300 }}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/About" component={About} exact />
                  <Route path="/Projects" component={Projects} exact />
                  <Route path="/CV" component={CV} exact />
                  <Route path="/Contact" component={Contact} exact />
                  <Route path="/" component={Home} exact />
                  <Route component={Error} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </ScrollToTop>
      </SC.App>
      <Footer />
    </>
  );
};

export default withRouter(App);
