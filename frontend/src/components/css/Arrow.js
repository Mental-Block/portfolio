import React from "react";

import styled from "styled-components";

const randomColor = () => {
  let num = Math.floor(Math.random() * 4).toString();
  const color = {
    "0": "#18CAE6",
    "1": "#bc13fe",
    "2": "#39ff14",
    "3": "#ff8300 ",
  };

  return color[num];
};
const randomSpeed = () => {
  return Math.floor(Math.random() * 10 + 5).toString() + "s";
};
const getRandomY = () => {
  let height = window.innerHeight;
  return Math.floor(Math.random() * height) + "px";
};
const getRandomX = () => {
  let width = window.innerWidth;
  return Math.floor(Math.random() * width) + "px";
};

const StyledRandomX = styled.div`
  position: absolute;
  top: ${getRandomY};
  left: 0;
  bottom: ${getRandomY};
  right: 0;
`;

const StyledRandomY = styled.div`
  position: absolute;
  top: 0;
  left: ${getRandomX};
  bottom: 0;
  right: ${getRandomX};
`;

export const StyledRightArrow = styled.span`
    position: absolute;
    display: block;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) =>
        props.blue === "false" ? randomColor : props.theme.primaryC}
    );
    animation: animate1 ${(props) =>
      props.blue === "false" ? randomSpeed : "2s"} linear infinite;
  }

  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
`;

export const StyledDownArrow = styled.span`
    position: absolute;
    display: block;
    z-index: 1;
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
       ${(props) =>
         props.blue === "false" ? randomColor : props.theme.primaryC}
    );
    animation: animate2 ${(props) =>
      props.blue === "false" ? randomSpeed : "2s"} linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
`;

export const StyledLeftArrow = styled.span`
position: absolute;
    display: block;
    bottom: 0;
    z-index: 1;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      270deg,
      transparent,
      ${(props) =>
        props.blue === "false" ? randomColor : props.theme.primaryC}
    );
    animation: animate3 ${(props) =>
      props.blue === "false" ? randomSpeed : "2s"} linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  
`;

export const StyledUpArrow = styled.span`
position: absolute;
    display: block;
    bottom: -100%;
    z-index: 1;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      360deg,
      transparent,
      ${(props) =>
        props.blue === "false" ? randomColor : props.theme.primaryC}
    );
    animation: animate4 ${(props) =>
      props.blue === "false" ? randomSpeed : "2s"} linear infinite;
    animation-delay: 1.5s;
  }

  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }

`;

export const StyledArrowShooting = () => {
  return (
    <>
      <StyledRandomX>
        <StyledLeftArrow blue="false" />
        <StyledRightArrow blue="false" />
      </StyledRandomX>
      <StyledRandomY>
        <StyledDownArrow blue="false" />
        <StyledUpArrow blue="false" />
      </StyledRandomY>
    </>
  );
};
