import React from "react";
import "./Navbar.css";
import { Route, Switch, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Here is the navbar</h1>
      <NavLink to="/About" activeClassName="selected">
        About Me
      </NavLink>
      <NavLink to="/Projects" activeClassName="selected">
        Projects
      </NavLink>
      <NavLink to="/CV" activeClassName="selected">
        CV
      </NavLink>
    </>
  );
}

export default Navbar;
