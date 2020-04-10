import React from "react";
import * as SC from "./CV.style";
import download from "../../assets/icons/download.svg";
import cv from "../../assets/cv/20200410-kin-au-cv-website.pdf";

const CV = () => {
  return (
    <SC.CV>
      <h2>See my CV</h2>
      <div className="downloadLink">
        <a href={cv} rel="noopener noreferrer" target="_blank">
          <img src={download} alt="download icon" />
          <h4>Download .pdf (73kb)</h4>
        </a>
      </div>
    </SC.CV>
  );
};

export default CV;
