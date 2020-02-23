import styled from "styled-components";

const Section = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  p {
    color: #333333;
  }

  @media (min-width: 768px) {
    position: fixed;
    margin: 12rem 2rem 30vw 35vw;
  }
`;

export { Section };
