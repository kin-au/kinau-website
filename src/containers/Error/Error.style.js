import styled from "styled-components";

const Section = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;

  a {
    font-size: 1rem;
    color: #1e5b96;
  }

  a:visited {
    color: #1e5b96;
  }

  @media (min-width: 768px) {
    margin-top: 1.65rem;
  }
`;

export { Section };
