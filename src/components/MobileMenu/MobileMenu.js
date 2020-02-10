import React, { useState, useEffect } from "react";
import "./MobileMenu.css";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <h1>Here is the MobileMenu</h1>
      <NavLink to="/About" className="navlink" activeClassName="selected">
        About Me
      </NavLink>
      <br />
      <NavLink to="/Projects" className="navlink" activeClassName="selected">
        Projects
      </NavLink>
      <br />
      <NavLink to="/CV" className="navlink" activeClassName="selected">
        CV
      </NavLink>
      <br />
      <NavLink to="/Contact" className="navlink" activeClassName="selected">
        Contact
      </NavLink>
    </>
  );
};

export default MobileMenu;
