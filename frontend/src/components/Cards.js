import React from "react";
import { useFetch } from "./use/useFetch";

import styled from "styled-components";
import { StyledLoadingText } from "../components/css/Text";
import { flexSpace } from "../components/css/Layout";

export const OtherCards = () => {
  const { data, loading } = useFetch(`${window.location.origin}/cards/other`);
  return (
    <>
      {loading ? (
        <StyledLoadingText>Fetching Data...</StyledLoadingText>
      ) : (
        <Cards props={data} />
      )}
    </>
  );
};

export const FeaturedCards = () => {
  const { data, loading } = useFetch(
    `${window.location.origin}/cards/featured`
  );
  return (
    <>
      {loading ? (
        <StyledLoadingText>Fetching Data...</StyledLoadingText>
      ) : (
        <Cards props={data} />
      )}
    </>
  );
};

const Cards = ({ props }) => {
  const Cards = props.map((card) => {
    return (
      <StyledCard key={card._id}>
        <StyledCardTitleContainer>
          <StyledCardTitle>{card.title}</StyledCardTitle>
          <StyledCardIconContainer>
            <a target="blank" href={card.githubURL}>
              <StyledCardIcon src="images/github.svg" />
            </a>

            <a target="blank" href={card.netlifyURL}>
              <StyledCardIcon src="images/external-link.svg" />
            </a>
          </StyledCardIconContainer>
        </StyledCardTitleContainer>
        <StyledCardImg src={card.img} />
        <StyledCardText>{card.description}</StyledCardText>
      </StyledCard>
    );
  });

  return (
    <>
      <StyledCardContainer>{Cards} </StyledCardContainer>
    </>
  );
};

const StyledCard = styled.div`
  box-shadow: 0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 10px ${(props) => props.theme.primaryC},
    0px 0px 30px ${(props) => props.theme.primaryC};
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 6px;
  max-width: 320px;
  margin: 2rem 2rem;
`;

const StyledCardImg = styled.img`
  margin: 0 auto;
  max-width: 320px;
  max-height: 100%;
  height: 207px;
  border-radius: 4px;
`;

const StyledCardTitle = styled.h2`
  margin: 0 0 0 0;
  font-size: 1.6rem;
  font-weight: 500;

  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
`;

const StyledCardText = styled.p`
  font-size: 1.1rem;
  line-height: 28px;
  text-shadow: 1px 1px #000000;
  margin: 1.25rem 0 0 0;
  font-family: ${(props) => props.theme.secondaryF};
  color: ${(props) => props.theme.thirdC};
`;

const StyledCardIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledCardIconContainer = styled.div`
  width: 70px;
  height: auto;
  ${flexSpace};

  a {
    border-radius: 4px;
    width: 30px;
    height: 30px;
    transition: 300ms ease-in;
  }

  a:hover {
    background: ${(props) => props.theme.primaryC};
  }
`;

const StyledCardTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  ${flexSpace};
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;
