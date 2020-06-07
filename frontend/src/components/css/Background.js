import styled from "styled-components";

export const StyledBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  &::after {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left 90%,
      left top,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: gradient(
      linear,
      left 90%,
      left top,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    transform: perspective(400px) rotateX(40deg) scale(2, 1) translateZ(80);
    -webkit-background-clip: content-box;
    -webkit-backface-visibility: hidden;
    outline: 1px solid transparent;
    transform-origin: bottom center;
    will-change: transform;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 1px;
    background-position: left bottom;
    background-size: 40px 40px;
    background-image: linear-gradient(
        to right,
        ${(props) => props.theme.backgroundC} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${(props) => props.theme.backgroundC} 1px,
        transparent 1px
      );
  }
`;
