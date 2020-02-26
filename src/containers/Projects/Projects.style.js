import styled from "styled-components";

const Projects = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  word-wrap: break-word;

  article {
    border: 2px solid #9dc6ec;
    margin-bottom: 1rem;
    padding: 0.7rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    text-decoration: none;
    color: #15416b;
    opacity: 1;
    transition: 0.4s;
  }

  a:hover {
    opacity: 0.8;
    transition: 0.2s;
  }

  a:visited {
    color: #15416b;
  }

  p {
    margin: 0.5rem;
  }

  .subheading {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: 700;
  }

  h4 {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 1.3rem;
  }

  .projectName {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 1rem;
    font-family: "Raleway Black", sans-serif;
    font-weight: 700;
    font-size: 1.2em;
    text-transform: uppercase;
  }

  .imageMobile {
    display: block;
    width: 100%;
  }

  .imageDesktop {
    display: none;
  }

  @media (min-width: 768px) {
    margin-top: 1.65rem;
    margin-bottom: 1.5rem;
    position: relative;
    height: 100%;
    overflow: auto;

    .projectsContainer {
      margin-top: 1rem;
      width: 100%;
    }

    .contentWrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    article {
      margin-right: 1rem;
      padding: 1rem;
    }

    .projectHeadline {
      display: inline-block;
      width: 50%;
    }

    .imageMobile {
      display: none;
    }

    .imageDesktop {
      display: inline-block;
      width: 50%;
    }
  }
`;

export { Projects };
