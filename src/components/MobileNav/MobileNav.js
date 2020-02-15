import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./MobileNav.style";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {showNav && (
        <SC.Nav>
          <ul>
            <li>
              <NavLink
                to="/About"
                onClick={toggleNav}
                activeClassName="selected"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                onClick={toggleNav}
                activeClassName="selected"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/CV" onClick={toggleNav} activeClassName="selected">
                CV
              </NavLink>
            </li>
            <li className="bottomLink">
              <NavLink
                to="/Contact"
                onClick={toggleNav}
                activeClassName="selected"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </SC.Nav>
      )}
      <SC.NavButton onClick={toggleNav}>&#9776;</SC.NavButton>
    </>
  );
};

export default MobileNav;
