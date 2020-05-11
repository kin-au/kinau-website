/* istanbul ignore file */

import styled from "styled-components";

const App = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    /* opacity: 1; */
    display: none;
  }

  /* .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  } */

  @media (min-width: 768px) {
    display: flex;

    .leftColumn {
      width: 100%;
      min-width: 400px;
      max-width: 35%;
      flex: 1;
      padding-bottom: calc(100vh - 532px);
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
