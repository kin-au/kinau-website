import styled from "styled-components";

const ContactList = styled.ul`
  position: fixed;
  display: block;
  /* top: 20rem; */
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 1.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-type: none;
  padding-left: 0;
  margin: 20rem 70vw 0 0;
  min-width: 400px;

  a {
    text-decoration: none;
    color: #15416b;
  }

  a:visited {
    color: #15416b;
  }

  .contact-logo {
    vertical-align: middle;
    height: 4rem;
    width: 4rem;
    padding: 0.3rem 0 0.3rem 0.5rem;
  }
`;

export { ContactList };
