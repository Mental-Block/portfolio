import styled from "styled-components";

export const flexSpace = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexCenter = `
    display:flex; 
    align-items: center;
    justify-content: center;
`;

export const StyledPageWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledCenterContainer = styled.div`
  margin-top: 117.5px;
  padding: 4rem 0;
  ${flexCenter}
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    margin-top: 85.5px;
  }
`;
