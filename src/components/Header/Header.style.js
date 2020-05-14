import styled from "styled-components";

const Header = styled.header`
  padding-right: 2rem;
  text-align: right;
  border-bottom: 1.1rem solid #9dc6ec;

  h1 {
    margin-block-start: 1rem;
    margin-block-end: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    letter-spacing: 0.4rem;
    font-size: 3.5rem;
    text-transform: uppercase;
  }

  a {
    color: #15416b;
    text-decoration: none;
  }

  a:visited {
    color: #15416b;
  }

  h3 {
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.2rem;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding-right: 0;
    border-bottom: 1.5rem solid #9dc6ec;

    h1 {
      margin-block-start: 3rem;
      margin-block-end: 1rem;
      font-size: 6rem;
    }

    h3 {
      margin-block-end: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export { Header };
