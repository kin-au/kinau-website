import styled from "styled-components";

const Section = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  p {
    color: #333333;
    margin-bottom: 0.5rem;
  }

  li {
    color: #333333;
  }

  details {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    padding: 0.5rem 0.8rem;
    border: 1.5px solid #9dc6ec;
    border-radius: 6px;
  }

  details[open] > summary ~ * {
    animation: fadeIn 0.5s;
  }

  summary {
    font-weight: 600;
    font-size: 1.1rem;
  }

  summary:hover {
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
    color: #1e5b96;
    opacity: 1;
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
    margin-bottom: 1.5rem;
    height: 100%;

    .contentWrapper {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .detailsContainer {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export { Section };
