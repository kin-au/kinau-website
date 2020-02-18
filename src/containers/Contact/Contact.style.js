import styled from "styled-components";

const Contact = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;

  a {
    text-decoration: none;
    color: #15416b;
  }

  a:visited {
    color: #15416b;
  }

  ul {
    font-weight: 100;
    list-style-type: none;
    padding-left: 0;
  }

  li {
    font-size: 1.2rem;
  }

  .contact-logo {
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    padding: 0.3rem 0.5rem;
  }
`;

export { Contact };
