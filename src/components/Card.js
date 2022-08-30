import React from "react";

import { 
  StyledCard, 
  StyledCardTitle, 
  StyledCardTitleContainer,
  StyledIcon,
  StyledCardIconContainer,
  StyledIconLink,
  StyledCardImg,
  StyledCardText,
  StyledCardContentContainer,
  StyledList,
  StyledListItem
} from "../css";

const Card = (props) => {
  return(
  <>
    <StyledCard>
      <StyledCardTitleContainer>
        <StyledCardTitle>{props.title}</StyledCardTitle>
          <StyledCardIconContainer>
              {props.githubURL && <StyledIconLink target="_blank" rel="noopener noreferrer" href={props.githubURL}>
                <StyledIcon src="images/github.svg" />
              </StyledIconLink> }
              { props.url &&
              <StyledIconLink target="_blank" rel="noopener noreferrer" href={props.url}>
                <StyledIcon src="images/external-link.svg" />
              </StyledIconLink> }
            </StyledCardIconContainer>
        </StyledCardTitleContainer>
        <StyledList display="inline-flex">
            <StyledListItem>Technologies used: &nbsp;</StyledListItem>
            {
              props.tech.map((text, index) => (
                <StyledListItem key={index}>{text} &nbsp;</StyledListItem>
              ))
            }
          </StyledList>
        <StyledCardContentContainer>
            <StyledCardImg src={props.img} />
            <StyledCardText>{props.description}</StyledCardText>
          </StyledCardContentContainer>
          
      </StyledCard>
  </>
  )
};

export default Card;

