import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./Header.style";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";
import ContactInfo from "../ContactInfo/ContactInfo";

const Header = () => {
  return (
    <SC.Header>
      <Link to="/">
        <h1>Kin Au</h1>
      </Link>

      <h3>Full Stack Developer</h3>
      <div className="mobileView">
        <MobileNav />
      </div>
      <div className="desktopView">
        <ContactInfo />
        <Navbar />
      </div>
    </SC.Header>
  );
};

export default Header;
