import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="App-header">
      <h1>Kin's website, coming soon...</h1>
      <section aria-label="contact information">
        <p>
          Say&nbsp;
          <a
            className="App-link"
            aria-label="contact email link"
            href="mailto:hello@kinau.co.uk"
          >
            hello@kinau.co.uk
          </a>
        </p>
      </section>
      <Navbar />
    </header>
  );
}

export default Header;
