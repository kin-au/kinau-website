import styled from "styled-components";

const Header = styled.header`
  padding-left: 2rem;
  border-bottom: 1.1rem solid #9dc6ec;

  h1 {
    padding-top: 1rem;
    font-family: "Raleway", sans-serif;
    font-weight: 900;
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
    font-weight: 500;
    letter-spacing: 0.2rem;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding-left: 0.3rem;
    border-bottom: 1.5rem solid #9dc6ec;

    h1 {
      padding-top: 3rem;
      margin-bottom: 1rem;
      font-size: 6rem;
    }

    h3 {
      margin-block-end: 2rem;
      font-size: 1.5rem;
      letter-spacing: 0.25rem;
    }
  }
`;

export { Header };
