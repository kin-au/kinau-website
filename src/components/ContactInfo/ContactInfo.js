import React from "react";
import * as SC from "./ContactInfo.style";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const ContactInfo = () => {
  return (
    <SC.ContactList>
      <li>
        <img src={email} alt="email" className="contact-logo"></img>
        hello@kinau.co.uk
      </li>
      <li>
        <img src={github} alt="github" className="contact-logo"></img>
        github.com/kin-au
      </li>
      <li>
        <img src={linkedin} alt="linkedin" className="contact-logo"></img>
        linkedin.com/in/kin-au
      </li>
    </SC.ContactList>
  );
};

export default ContactInfo;