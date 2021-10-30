import React from 'react'

import {
    StyledHomeText, 
    StyledButton, 
    StyledRandomX,
    StyledRandomY,
    StyledRightArrow,
    StyledLeftArrow,
    StyledDownArrow, 
    StyledUpArrow, 
    StyledCenterContainer,
    StyledHomeBackground
  } from "../css"


const ArrowAnimation = () => {
    return (
        <>
        <StyledRandomX>
            <StyledRightArrow />
        </StyledRandomX>
        <StyledRandomX>
            <StyledLeftArrow />
        </StyledRandomX>
        <StyledRandomY>
            <StyledDownArrow />
        </StyledRandomY>
        <StyledRandomY>
          <StyledUpArrow />
        </StyledRandomY>
        </>
    )
}

const Home = () => {
    return (
      <>
        <div>
          <StyledHomeBackground>
          <ArrowAnimation />
          <ArrowAnimation />
          <ArrowAnimation />
          <StyledCenterContainer direction="column">
            <StyledHomeText>
              Hi, my name Is Aaron and I am a software developer.
            </StyledHomeText>
            <StyledButton as="a" href="#projects">View Projects</StyledButton>
          </StyledCenterContainer>
        </StyledHomeBackground>        
      </div>
      </>
    )
}

export default Home
