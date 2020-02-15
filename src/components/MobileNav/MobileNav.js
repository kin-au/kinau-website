import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./MobileNav.style";

const MobileNav = () => {
  return (
    <SC.Nav>
      <a href="#">&#9776;</a>
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
        <li>
          <NavLink to="/Contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
    </SC.Nav>
  );
};

export default MobileNav;
