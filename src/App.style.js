/* istanbul ignore file */

import styled from "styled-components";

const App = styled.div`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 1rem;

    .sticky {
      position: sticky;
      top: 0;
      background-color: white;
    }

    .leftColumn {
      width: 100%;
      min-width: 400px;
      max-width: 35%;
      flex: 1;
    }

    .rightColumn {
      flex: 1;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
    }
  }
`;
export { App };
