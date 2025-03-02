import React from 'react'

import Card from "./Card";
import cardData from "../projects.json"

import { 
  StyledCenterContainer,
  StyledGlowingRow,
  StyledGlowingColumnLeft,
  StyledLeftArrow,
  StyledProjectsBackground,
  StyledGlowingRowLeftFix,
  StyledGlowingRowRightFix,
  StyledFixRowGlowTopLeft,
  StyledDownArrow,
  StyledGlowingColumnTopFix,
  StyledGlowingColumnBottomFix,
  StyledTitle,
  StyledFixColumnGlowBottomLeft
} from "../css"

const Projects = () => {
    return (   
      <StyledProjectsBackground>

        <StyledGlowingColumnLeft>        
          <StyledGlowingColumnTopFix />
          <StyledGlowingColumnBottomFix />
          <StyledFixColumnGlowBottomLeft />

          <StyledDownArrow speed='1.8s' color="blue" style={{left: '15px'}} />
          <StyledDownArrow speed='1.5s' color="blue" style={{left: '18px'}} />
          <StyledDownArrow speed='1s' color="blue" style={{left: '20px'}} />
        </StyledGlowingColumnLeft>

          <StyledGlowingRow>
            <StyledGlowingRowLeftFix />
            <StyledGlowingRowRightFix /> 
            <StyledFixRowGlowTopLeft />

            <StyledLeftArrow speed='1s' color="blue" style={{top: '15px'}}/>
            <StyledLeftArrow speed='1.5s' color="blue" style={{top: '18px'}}/>
            <StyledLeftArrow speed='1.8s' color="blue" style={{top: '20px'}}/>
          </StyledGlowingRow>

          <StyledCenterContainer>
            <StyledTitle>
              Projects
              <StyledLeftArrow speed="2s" color="blue" />
            </StyledTitle>
          </StyledCenterContainer>
                    {
                      cardData.map((props) => {
                          return <Card className='text-slide' key={props._id} {...props} />
                      
                      })
                    }
      </StyledProjectsBackground>
    )
}

export default Projects
