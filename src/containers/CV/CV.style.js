import styled from "styled-components";

const CV = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  img {
    max-width: 150px;
  }

  a {
    display: block;
    opacity: 1;
    text-align: center;
    text-decoration: none;
    color: #1e5b96;
    font-size: 1.2rem;
    width: 15rem;
    max-width: 100%;
    padding: 1rem 0;
    margin: 0 auto;
    transition: 0.4s;
  }

  a:hover {
    opacity: 0.8;
    transition: 0.2s;
  }

  a:visited {
    color: #1e5b96;
  }

  @media (min-width: 768px) {
    margin-top: 1.65rem;
  }
`;

export { CV };
