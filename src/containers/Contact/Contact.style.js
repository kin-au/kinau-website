import styled from "styled-components";

const Contact = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;

  a {
    text-decoration: none;
    color: #1e5b96;
  }

  a:visited {
    color: #1e5b96;
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
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.3rem 0.5rem 0.3rem 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export { Contact };
