import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const mobileScreen = useMediaQuery({ query: "(max-device-width: 1224px)" });

  return (
    <header>
      <h1>
        <Link to="/">KIN AU</Link>
      </h1>
      <h3>FULL STACK DEVELOPER</h3>
      {mobileScreen ? null : (
        <ul className="contact-list">
          <li>hello@kinau.co.uk</li>
          <li>+44 (0)7500 847 227</li>
          <li>github.com/kin-au</li>
          <li>linkedin.com/in/kin-au</li>
        </ul>
      )}
      {mobileScreen ? <MobileNav /> : <Navbar />}
    </header>
  );
};

export default Header;
