import React from "react";

// css
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../components/css/Theme";
import { StyledBackground } from "../components/css/Background";
import {
  StyledPageWrapper,
  StyledCenterContainer,
} from "../components/css/Layout";
import { StyledTitle } from "../components/css/Text";

import cardData from "../cardData.json"

export const Archive = () => {

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledPageWrapper>
          <StyledBackground>
            <StyledCenterContainer>
              <StyledTitle title={"Archive"} />
                <Table props={cardData} />
            </StyledCenterContainer>
          </StyledBackground>
        </StyledPageWrapper>
      </ThemeProvider>
    </>
  );
};

const Table = ({ props }) => {
  const tableInformation = props.map((prop) => {
    return (
      <tr key={prop._id}>
        <td>{prop.year}</td>
        <td>{prop.title}</td>
        <td>
          <a target="blank" href={prop.githubURL}>
            Link
          </a>
        </td>
        <td>
          <a target="blank" href={prop.netlifyURL}>
            Link
          </a>
        </td>
      </tr>
    );
  });

  return (
    <>
      <StyledTable>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Github</th>
            <th>Live View</th>
          </tr>

          {tableInformation}
        </tbody>
      </StyledTable>
    </>
  );
};

const StyledTable = styled.table`
  margin-top: 3rem;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
    0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 20px ${(props) => props.theme.primaryC};
  td,
  th {
    border: 1px solid ${(props) => props.theme.secondaryC};
    text-align: left;
    padding: 8px;
  }

  td {
    a {
      color: ${(props) => props.theme.thirdC};
    }

    a:hover {
      color: ${(props) => props.theme.primaryC};
      transition: 300ms ease-in;
    }
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.backgroundC};
  }

  tr:nth-child(odd) {
    background-color: ${(props) => props.theme.backgroundC};
  }

  @media only screen and (min-width: 768px) {
    width: 60%;

    th,
    td {
      padding: 12px;
    }
  }
`;
