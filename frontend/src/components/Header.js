import React, { useState } from "react";

// css
import styled, { ThemeProvider } from "styled-components";
import StyledLink from "./css/Link";
import { mainTheme } from "./css/Theme";
import { flexSpace, flexCenter } from "./css/Layout";

export const Header = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledNav>
          <Logo />
          <Burger />
        </StyledNav>
      </ThemeProvider>
    </>
  );
};

const Burger = () => {
  const [toggleValue, toggle] = useState(false);

  return (
    <>
      <StyledBurger
        toggleValue={toggleValue}
        onClick={() => toggle(!toggleValue)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <LinkWrapper toggleValue={toggleValue} />
    </>
  );
};

const LinkWrapper = ({ toggleValue }) => {
  return (
    <>
      <StyledLinkWrapper toggleValue={toggleValue}>
        <StyledLink exact to="/" activeStyle={{ color: mainTheme.primaryC }}>
          Home
        </StyledLink>
        <StyledLink to="/projects" activeStyle={{ color: mainTheme.primaryC }}>
          Projects
        </StyledLink>
        <StyledLink to="/contact" activeStyle={{ color: mainTheme.primaryC }}>
          Contact
        </StyledLink>
        <StyledLink as="a" href="/Resume.pdf" download>
          Resume
        </StyledLink>
      </StyledLinkWrapper>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <StyledLink exact to="/">
        <StyledLogo>Aaron Tibben</StyledLogo>
      </StyledLink>
    </>
  );
};

const StyledNav = styled.nav`
  ${flexSpace}
  position: fixed;
  z-index: 9999999;
  max-width: 1856px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 2rem;
  background-color: rgba(0, 0, 0, 0.75);
`;

const StyledLogo = styled.h1`
  position: relative;
  z-index: 1;
  width: 100px;
  text-align: center;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.primaryC};
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -1px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

const StyledLinkWrapper = styled.div`
  visibility: ${({ toggleValue }) => (toggleValue ? "visible" : "hidden")};
  position: absolute;
  width: 100%;
  min-height: 200px;
  padding-bottom: 2rem;
  left: 0;
  top: 117.5px;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  ${flexCenter}
  flex-direction: column;

  a {
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    ${flexSpace}
    visibility: visible;
    background: none;
    flex-direction: row;
    position: static;
    width: 400px;
    min-height: auto;
    padding: 0;
  }
`;

const StyledBurger = styled.button`
  position: relative;
  background: none;
  border: none;
  right: 0;
  top: 0;
  z-index: 1;
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  cursor: pointer;
  outline: none;

  div {
    position: ${({ toggleValue }) => (toggleValue ? "absolute" : "static")};
    right: 0;
    width: 30px;
    height: 5px;
    background-color: ${(props) => props.theme.primaryC};
  }

  div:nth-child(1) {
    transform: ${({ toggleValue }) => (toggleValue ? "rotate(135deg)" : "")};
  }

  div:nth-child(2) {
    margin: 8px 0px;
    display: ${({ toggleValue }) => (toggleValue ? "none" : "block")};
  }

  div:nth-child(3) {
    transform: ${({ toggleValue }) => (toggleValue ? "rotate(45deg)" : "")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
