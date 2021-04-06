import React from "react";

// css
import styled, { ThemeProvider } from "styled-components";
import { StyledLinkButton } from "../components/css/Link";
import { mainTheme } from "../components/css/Theme";
import {
  StyledPageWrapper,
  StyledCenterContainer,
  flexCenter,
} from "../components/css/Layout";
import { StyledBackground } from "../components/css/Background";
import { StyledArrowShooting } from "../components/css/Arrow";

export const Home = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledPageWrapper>
          <StyledHomeBackground>
            <StyledArrowShooting />
            <StyledArrowShooting />
            <StyledArrowShooting />
            <StyledHomeContainer>
              <StyledHomeText>
                Hi, my name Is Aaron and I am a Software Developer.
              </StyledHomeText>
              <StyledLinkButton title="View Projects" link="/projects" />
            </StyledHomeContainer>
          </StyledHomeBackground>
        </StyledPageWrapper>
      </ThemeProvider>
    </>
  );
};

const StyledHomeText = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  text-align: center;
  line-height: 56px;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
  text-shadow: 5px 4px 4px black;
`;

const StyledHomeContainer = styled(StyledCenterContainer)`
  padding: 2rem;
  margin-top: 0;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const StyledHomeBackground = styled(StyledBackground)`
  overflow: hidden;
  height: 100vh;
  ${flexCenter}
`;
