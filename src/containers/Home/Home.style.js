import styled from "styled-components";

const Section = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  p {
    color: #333333;
    margin-bottom: 0.5rem;
  }

  /* a {
    text-decoration: none;
    color: #1e5b96;
    opacity: 1;
    transition: 0.4s;
  }

  a:hover {
    opacity: 0.8;
    transition: 0.2s;
  } */

  a:visited {
    color: #1e5b96;
  }

  @media (min-width: 768px) {
    margin-top: 1.65rem;
    margin-bottom: 1.5rem;
    position: relative;
    height: 100%;
    overflow: auto;

    h3 {
      margin-block-end: 0;
      min-height: 3.2rem;
    }

    /* .content {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    } */
  }
`;

export { Section };
