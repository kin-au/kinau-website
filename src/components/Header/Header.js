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
        <Link to="/">Kin Au</Link>
      </h1>
      {mobileScreen ? <MobileNav /> : <Navbar />}
    </header>
  );
};

export default Header;
