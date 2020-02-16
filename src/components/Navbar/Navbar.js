import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/About" activeClassName="selected">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" activeClassName="selected">
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/CV" activeClassName="selected">
            CV
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
