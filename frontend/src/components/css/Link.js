import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  StyledUpArrow,
  StyledRightArrow,
  StyledLeftArrow,
  StyledDownArrow,
} from "../css/Arrow";

const DefaultLinkButton = styled(NavLink)`
  font-family: ${(props) => props.theme.primaryF};
  cursor: pointer;
  position: relative;
  display: block;
  padding: 25px 30px;
  margin: 30px auto 0 auto;
  border: none;
  color: ${(props) => props.theme.primaryC};
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 5px;
  text-shadow: 2px 2px 4px black;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  &:hover {
    text-shadow: 5px 5px 4px black;
    background: ${(props) => props.theme.primaryC};
    color: white;
    box-shadow: 0px 0px 4px ${(props) => props.theme.primaryC},
      0px 0px 10px ${(props) => props.theme.primaryC},
      0px 0px 20px ${(props) => props.theme.primaryC},
      0px 0px 120px ${(props) => props.theme.primaryC};
  }
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.thirdC};
  font-family: ${(props) => props.theme.secondaryF};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    transition: 200ms ease-in;
    color: ${(props) => props.theme.primaryC};
  }
`;

export const StyledLinkButton = ({ title, link, button }) => {
  // by default button will return null if not passed in as a parameter
  if (button === "true") button = "button";

  return (
    <DefaultLinkButton as={button} to={link}>
      {title}
      <StyledUpArrow />
      <StyledRightArrow />
      <StyledLeftArrow />
      <StyledDownArrow />
    </DefaultLinkButton>
  );
};
export default (props) => <StyledLink {...props} />;
