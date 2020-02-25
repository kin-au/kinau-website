import styled from "styled-components";

const Nav = styled.nav`
  display: none;
  /* display: absolute; */
  /* position: fixed; */
  /* margin-left: calc(400px); */
  /* margin-left: 35vw; */
  font-family: "Raleway Black", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 1.6rem;
  text-transform: uppercase;
  /* margin-top: 3rem; */
  /* margin: 3.5rem 0 0 35vw; */

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    margin-block-start: 0;
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
    display: flex;
    flex-flow: row wrap;
    /* justify-content: flex-end; */
    /* flex-direction: row; */
  }

  li {
    /* margin-top: 0.8rem; */
    flex: 1;
    margin: 2rem 2rem 0 2rem;
    text-align: left;
    /* padding-bottom: 1.2rem; */
    white-space: nowrap;
    text-align: center;
    /* width: 20rem; */
  }

  a {
    text-decoration: none;
  }

  a.selected {
    border-bottom: 1.2rem solid #9dc6ec;
  }

  a:hover:not(.selected) {
    border-bottom: 1.2rem solid #9dc6ec;
    animation-name: onHover;
    animation-duration: 0.2s;
  }

  a:visited {
    color: #15416b;
  }

  @keyframes onHover {
    from {
      border-bottom: none;
    }
    to {
      border-bottom: 1.2rem solid #9dc6ec;
    }
  }
`;

export default Nav;
