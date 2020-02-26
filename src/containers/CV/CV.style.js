import styled from "styled-components";

const CV = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  div {
    display: block;
    text-align: center;
    opacity: 1;
    transition: 0.4s;
  }

  a {
    text-decoration: none;
    color: #15416b;
    font-size: 1.2rem;
  }

  div:hover {
    opacity: 0.8;
    transition: 0.2s;
  }

  a:visited {
    color: #15416b;
  }

  @media (min-width: 768px) {
    margin-top: 1.65rem;

    .downloadLink {
      margin: 5rem auto;
    }
  }
`;

export { CV };
