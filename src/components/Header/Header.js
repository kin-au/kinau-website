import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./Header.style";

const Header = () => {
  return (
    <SC.Header>
      <Link to="/">
        <h1>Kin Au</h1>
      </Link>
      <h3>Web Developer</h3>
    </SC.Header>
  );
};

export default Header;
