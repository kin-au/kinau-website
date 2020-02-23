import styled from "styled-components";

const Header = styled.header`
  margin-right: 2rem;
  text-align: right;

  h1 {
    margin-block-start: 1rem;
    margin-block-end: 0;
    font-family: "Raleway Black", sans-serif;
    font-weight: 1000;
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

  hr {
    border: 0.5rem solid;
    color: #9dc6ec;
    background-color: #9dc6ec;
    width: calc(100vw - 3rem);
    margin-left: 0;
  }

  .allView {
    @media (min-width: 768px) {
      position: fixed;
      /* text-align: right; */
      min-width: 400px;
      /* margin-right: 70vw; */

      h1 {
        margin-block-start: 3rem;
        margin-block-end: 1rem;
        font-size: 6rem;
      }

      h3 {
        margin-block-end: 2rem;
        font-size: 1.5rem;
      }

      hr {
        border: 0.8rem solid;
        min-width: 375px;
        width: calc(100vw - 70vw - 3.5rem);
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }

  .mobileView {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .desktopView {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export { Header };
