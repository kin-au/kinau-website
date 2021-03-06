import React from "react";
import * as SC from "./CV.style";
import logo from "../../assets/logos/kinau.svg";
import cv from "../../assets/cv/20200510-kin-au-cv-website.pdf";

const CV = () => {
  return (
    <SC.CV>
      <h2>Please get in touch with me to discuss opportunities</h2>
      {/* <h2>See my CV</h2> */}
      {/* <a href={cv} rel="noopener noreferrer" target="_blank">
        <img src={logo} alt="download icon" />
        <h4>Download .pdf (77kb)</h4>
      </a> */}
    </SC.CV>
  );
};

export default CV;
