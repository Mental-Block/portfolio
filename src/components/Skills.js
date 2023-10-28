import React from 'react'

import { 
  StyledTitle, 
  StyledTable, 
  StyledLeftArrow, 
  StyledCenterContainer, 
  StyledGlowingRowRightFix,
  StyledGlowingRowLeftFix,
  StyledGlowingRow,
  StyledGlowingColumnRight,
  StyledGlowingColumnBottomFix,
  StyledDownArrow,
  StyledGlowingColumnTopFix,
  StyledSkillsBackground,
  StyledRightArrow,
  StyledFixRowGlowTopRight,
  StyledGlowingRowTopFix,
  StyledFixColumnGlowBottomLeft
} from '../css'

const Skills = () => {
    const TECH_STACK = [{
      frontend: "Html",
      backend: "NodeJS (NPM)",
      other: "Git"
    },
    {
      frontend: "(S)css & Styled-Components",
      backend: "Express",
      other: "Docker"
    },
    {
      frontend: "Javascript & Typscript",
      backend: "Postges",
      other: "Bash"
    },
    {
      frontend: "React",
      backend: "MongoDB",
      other: 'BASIC'
    },
    {
      frontend: "WebPack",
      backend: "Mongoose",
      other: "Linux"
    }, 
    {
      frontend: "Babel",
      backend: "TypeORM",
    },
    {
      frontend: "Angular"
    }
  ]

    return (
        <>
        <StyledSkillsBackground>

        <StyledGlowingColumnRight>
          <StyledGlowingColumnTopFix />
          <StyledGlowingColumnBottomFix />

          <StyledFixColumnGlowBottomLeft />

          <StyledDownArrow speed='1.8s' color="blue" style={{left: '15px'}} />
          <StyledDownArrow speed='1.5s' color="blue" style={{left: '18px'}} />
          <StyledDownArrow speed='1s' color="blue" style={{left: '20px'}} />
        </StyledGlowingColumnRight>

          <StyledGlowingRow>
            <StyledGlowingRowLeftFix />
            <StyledGlowingRowRightFix />
            <StyledFixRowGlowTopRight />
            <StyledGlowingRowTopFix />

            <StyledRightArrow speed='1s' color="blue" style={{top: '15px'}}/>
            <StyledRightArrow speed='1.5s' color="blue" style={{top: '18px'}}/>
            <StyledRightArrow speed='1.8s' color="blue" style={{top: '20px'}}/>
          </StyledGlowingRow>

          <StyledCenterContainer >
            <StyledTitle>Tech Stack
              <StyledLeftArrow color="blue" speed='2s' />
            </StyledTitle>
          </StyledCenterContainer>
        
        <StyledCenterContainer>
          <StyledTable>
            <tbody>
                <tr>
                  <th><StyledTitle sm>Frontend/Client</StyledTitle></th>
                  <th><StyledTitle sm>Backend/Server</StyledTitle></th>
                  <th><StyledTitle sm>Other</StyledTitle></th>
                </tr>
                  {
                    TECH_STACK.map(({frontend, backend, other}, index) => (
                      <tr key={index}>
                        <td>{frontend}</td>
                        <td>{backend}</td>
                        <td>{other}</td>
                      </tr>
                    ))
                  }
            </tbody>
          </StyledTable>
        </StyledCenterContainer>        
      </StyledSkillsBackground>
        </>
    )
}

export default Skills
