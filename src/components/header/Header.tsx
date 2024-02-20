import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <img src="" alt="logo" />
      <ul>
        <a href="/">home</a>
        <a href="/">schedule</a>
        <a href="/">standings</a>
        <a href="/">stories</a>
        <a href="/">About/Contact</a>
      </ul>
      <button>login</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: rgba(0, 0, 0, 0.562);
  position: fixed;
  z-index: 25;
  backdrop-filter: blur(5px);
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    transition: 0.4s;
    &:hover {
      color: goldenrod;
    }
  }
`;

export default Header;
