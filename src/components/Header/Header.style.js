import styled from "styled-components";

const Header = styled.header`
  h1 {
    font-size: 4rem;
  }

  a {
    text-decoration: none;
  }

  h3 {
    font-size: 1.5rem;
  }

  .mobileView {
    @media (min-width: 321px) {
      display: none;
    }
  }

  .desktopView {
    display: none;
    @media (min-width: 321px) {
      display: block;
    }
  }
`;

export { Header };
