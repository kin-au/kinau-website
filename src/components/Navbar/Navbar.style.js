import styled from "styled-components";

const Nav = styled.nav`
  /* display: absolute; */
  position: fixed;
  /* margin-left: calc(400px); */
  /* margin-left: 35vw; */
  font-family: "Raleway Black", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 3.5rem 0 0 35vw;

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
    text-align: left;
    padding-bottom: 1.2rem;
    width: 20rem;
  }

  a.selected {
    border-bottom: 1.2rem solid #9dc6ec;
  }

  a:hover {
    border-bottom: 1.2rem solid #9dc6ec;
    animation-name: onHover;
    animation-duration: 0.2s;
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
