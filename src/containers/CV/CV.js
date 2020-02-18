import React from "react";
import * as SC from "./CV.style";
import download from "../../assets/download.svg";
import cv from "../../assets/kin-au-cv-20200218.pdf";

const CV = () => {
  return (
    <SC.CV>
      <h2>See my CV</h2>
      <div>
        <a href={cv} rel="noopener noreferrer" target="_blank">
          <img src={download} alt="download icon" />
          <h4>Download .pdf (72kb)</h4>
        </a>
      </div>
    </SC.CV>
  );
};

export default CV;
