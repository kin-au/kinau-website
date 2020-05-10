import React from "react";
import * as SC from "./Error.style";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <SC.Section>
      <h2>Error 404</h2>
      <p>This page does not exist!</p>
      <NavLink to="/">Back to homepage</NavLink>{" "}
    </SC.Section>
  );
};

export default Error;
