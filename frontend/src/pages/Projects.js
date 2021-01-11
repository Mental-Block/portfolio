import React from "react";
import Cards from "../components/Cards";

import cardData from "../cardData.json"


// css
import {StyledTable} from "./Archive"
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../components/css/Theme";
import { StyledBackground } from "../components/css/Background";
import {
  StyledPageWrapper,
  StyledCenterContainer,
} from "../components/css/Layout";
import { StyledLinkButton } from "../components/css/Link";
import { StyledTitle, Title } from "../components/css/Text";


export const Projects = () => {

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledPageWrapper>
          <StyledBackground>
            <StyledCenterContainer>
              <StyledTitle title={"Featured Projects"} />
              <Cards data={cardData.filter(({featured}) => featured === true)} />
              <StyledTitle title={"Other Projects"} />
              <Cards data={cardData.filter(({featured}) => featured === false)}/>
              <StyledTitle title={"Skills"} />
              <StyledTable>
                <tbody>
                  <tr>
                    <th><Title sm> Server Side</Title></th>
                    <th><Title sm> Web/Media</Title></th>
                    <th><Title sm> Version control</Title></th>
                    <th><Title sm> Analytics</Title></th>
                  </tr>
                  <tr>
                    <td>NodeJs (NPM)</td>
                    <td>HTML</td>
                    <td>GitHub</td>
                    <td>MongoDB</td>
                  </tr>
                  <tr>
                    <td>Express</td>
                    <td>(S)CSS & Styled-Components</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>JavaScript (ES6+)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>ReactJs</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>WebPack</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Babel</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Redux</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </StyledTable>
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
