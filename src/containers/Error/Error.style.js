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
  }

  @media (min-width: 768px) {
    position: fixed;
    margin: 12rem 2rem 30vw 35vw;
  }
`;

export { Section };
