import React from "react";
import * as SC from "./Error.style";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <SC.Section>
      <div>Error 404</div>
      <NavLink to="/">Back to homepage</NavLink>{" "}
    </SC.Section>
  );
};

export default Error;
