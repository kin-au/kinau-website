import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Here is the navbar</h1>
      <NavLink to="/" activeClassName="selected">
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
};

export default Navbar;
