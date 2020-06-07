import React from "react";
import { FeaturedCards, OtherCards } from "../components/Cards";

// css
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../components/css/Theme";
import { StyledBackground } from "../components/css/Background";
import {
  StyledPageWrapper,
  StyledCenterContainer,
} from "../components/css/Layout";
import { StyledLinkButton } from "../components/css/Link";
import { StyledTitle } from "../components/css/Text";
import { StyledList } from "../components/css/List";

export const Projects = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledPageWrapper>
          <StyledBackground>
            <StyledCenterContainer>
              <StyledTitle title={"Featured Projects"} />
              <FeaturedCards />
              <StyledTitle title={"Other Projects"} />
              <OtherCards />
              <StyledTitle title={"Skills"} />
              <StyledList>
                <li>HTML </li>
                <li>(S)CSS & Styled-Components</li>
                <li>JavaScript (ES6+)</li>
                <li>ReactJs</li>
                <li>NodeJs (NPM)</li>
              </StyledList>
              <StyledLinkButton
                link="/projects/archive"
                title="Projects Archive"
              />
            </StyledCenterContainer>
          </StyledBackground>
        </StyledPageWrapper>
      </ThemeProvider>
    </>
  );
};
