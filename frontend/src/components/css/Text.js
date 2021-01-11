import React from "react";
import styled from "styled-components";

import { StyledLeftArrow } from "./Arrow";

export const Title = styled.h2`
  text-align: center;
  overflow: hidden;
  position: relative;
  font-weight: 600;
  font-size: ${(props) => props.sm ? "1.25rem" : "1.8rem" };
  margin: 1rem 0;
  color: ${(props) => props.theme.primaryC};
  font-family: ${(props) => props.theme.secondaryF};
  letter-spacing: 2px;
  word-spacing: 3px;
  text-transform: upperCase;
`;

export const StyledTitle = ({ title, sm }) => {
  return (
    <>
      <Title sm={sm}>
        {title}
        <StyledLeftArrow />
      </Title>
    </>
  );
};

export const StyledLoadingText = styled.p`
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
`;
