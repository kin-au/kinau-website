import React from "react";
import "./Header.css";
// import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Kin Au</Link>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
