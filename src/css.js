import styled, {createGlobalStyle} from "styled-components";

  const THEME = {
    primaryF: "Roboto Mono, sans-serif" ,
    secondaryF: "Roboto Condensed, sans-serif",
    backgroundC: "#07090c",
    primaryC: "#18CAE6",
    secondaryC: "rgb(128, 128, 128)",
    thirdC: "#F8F8FF",
    purple: "#bc13fe",
    green: "#39ff14",
    orange: "#ff8300"
};

export default THEME

export const StyledGlobal = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
}

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
  }
    /* Scroll Bar*/
  ::-webkit-scrollbar {
    
    width: 2px
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: "#000000"; 

  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%, rgba(24,202,230,1) 100%);
    border-radius:0 0 0 0; 
  }

  /* no good way provided to access the styles of the carousel so we have this ugly mess */

  /* Thumb nail box for carousel*/
  ._2c50p{ 
    max-width: 832px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    z-index: 2;
    
  }

  /* Thumb nail for carousel*/
  ._-cAh3{

  }

  /*carousel*/
  ._2ILZE{
    background: transparent !important;
    position: relative !important;
    max-width: 800px;
    width: 100% !important;
    margin-top: 4rem !important;
  }

  /*carousel slide */
  ._L8X8r{
    
  }
`;

export const randomColor = () => {
  let num = Math.floor(Math.random() * 4).toString();
  const color = {
    "0": THEME.primaryC,
    "1": THEME.orange,
    "2": THEME.green,
    "3": THEME.purple,
  };

  return color[num];
};

export const randomSpeed = () => {
  return Math.floor(Math.random() * 10 + 5).toString() + "s";
};

export const getRandomY = () => {
  let height = window.innerHeight;
  return Math.floor(Math.random() * height) + "px";
};

export const getRandomX = () => {
  let width = window.innerWidth;
  return Math.floor(Math.random() * width) + "px";
};

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

export const StyledCenterContainer = styled.div`
  ${flexCenter}
  flex-direction: ${(props) => props.direction ? props.direction : "row" };;
`;

/* CARD */

export const StyledCardContentContainer = styled(StyledCenterContainer)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledCard = styled.div`
  max-width: 800px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 1);
  border: 1px solid ${props => props.theme.primaryC};
  padding: 20px;
  border-radius: 6px;
  margin: 40px auto;

  @media only screen and (min-width: 560px) {
    padding: 40px;
  }
`;

export const StyledCardImg = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 4px;
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
   margin-right: 20px;
  }
`;

export const StyledCardTitle = styled.h2`
  margin: 0 0 0 0;
  font-size: calc(1.25rem + 5 * ((100vw - 320px) / 680));
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
`;

export const StyledCardText = styled.p`
  font-size: 1.1rem;
  line-height: 28px;
  text-shadow: 1px 1px #000000;
  margin: 20px 0 0 0;
  font-family: ${(props) => props.theme.secondaryF};
  color: ${(props) => props.theme.thirdC};

   @media only screen and (min-width: 769px) {
    margin: 0 0 0 0;
  }
`;

export const StyledCardIconContainer = styled.div`
  width: 65px;
  height: auto;
  ${flexSpace};

  @media only screen and (max-width: 360px) {
    width: 60px;
  }
`;

export const StyledCardTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${flexSpace};
`;
/* CARD */

/* BACKGROUNDS */

export const StyledGreyGridBackground = styled.div`
    position: relative;
    width: 100%;
    height: 100%;    
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      padding: 1px;
      background-position: left bottom;
      border-bottom: 1px solid ${(props) => props.theme.backgroundC};
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
`

export const StyledGlowingColumn = styled.div`
  position: absolute;
  padding: 10px;
  background: ${(props) => props.theme.backgroundC};
  top: 0;
  width: 40px;
  height: 100%;
  box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
    0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 20px ${(props) => props.theme.primaryC};

    
    ::after{
      display: block;
      content: "";
      position: relative;
      background-color: rgba(0, 0, 0, 0.5);
      width: 20px;
      top: 20px;
      height: calc(100% - 20px);
      z-index: 1;
    }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledGlowingColumnRight = styled(StyledGlowingColumn)`
  right: 0;

 ::after{
   right: 0;
 }
`

export const StyledGlowingColumnLeft =styled(StyledGlowingColumn)`
  left: 0;

  ::after{
   left: 0;
 }
`

const StyledFixRowGlow = styled.div`
  position:absolute;
  display: block;
  content: "";
  position: absolute;
  background-color: ${(props) => props.theme.backgroundC};
  width: 40px;
  height: 80px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledFixColumnGlowBottomLeft = styled(StyledFixRowGlow)`
  bottom: 0px;
  left: 0px;
`

export const StyledFixRowGlowTopLeft = styled(StyledFixRowGlow)`
  top: 0;
  left: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledFixRowGlowTopRight = styled(StyledFixRowGlow)`
  top: 0;
  right: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledGlowingRowFix = styled.div`
  display: block;
  content: "";
  position: absolute;
  background-color: ${(props) => props.theme.backgroundC};
  z-index: 3;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledGlowingColumnTopFix = styled(StyledGlowingRowFix)`
  top: 0;
  width: 20px;
  height: 10px;
`

export const StyledGlowingRowTopFix = styled(StyledGlowingColumnTopFix)`
  background-color: rgba(0, 0, 0, 0.5);
`

export const StyledGlowingRowTopRightFix2 = styled(StyledGlowingColumnTopFix)`
  background-color: rgba(0, 0, 0, 0.5);
  right: 10px;
`

export const StyledGlowingColumnBottomFix = styled(StyledGlowingRowFix)`
  bottom: 0;
  width: 20px;
  height: 10px;
  background: rgba(0, 0, 0, 0.5);
`

export const StyledGlowingRow = styled.div`
position: absolute;
padding: 10px;
top: 0;
left: 0px;
height: 40px;
width: 100%;
background: ${(props) => props.theme.backgroundC};
box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
  0px 0px 2px ${(props) => props.theme.primaryC},
  0px 0px 5px ${(props) => props.theme.primaryC},
  0px 0px 20px ${(props) => props.theme.primaryC};
z-index: 0;

  ::after{
    display: block;
    content: "";
    position: relative;
    background-color:  rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 20px;
    left: 0;
    z-index: 3;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const StyledGlowingRowLeftFix = styled(StyledGlowingRowFix)`
  left: 0;
  width: 10px;
  height: 20px;
`

export const StyledGlowingRowTopRightFix = styled(StyledGlowingRowFix)`
  top:10px;
  right: 0;
  width: 10px;
  height: 20px;
`

export const StyledGlowingRowRightFix = styled(StyledGlowingRowFix)`
  right: 0;
  width: 10px;
  height: 20px;
`

const StyledGlowingBackground = styled(StyledGreyGridBackground)`
    padding: 40px 20px;
    position: relative;
    box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
      0px 0px 2px ${(props) => props.theme.primaryC},
      0px 0px 5px ${(props) => props.theme.primaryC},
      0px 0px 20px ${(props) => props.theme.primaryC};

`

export const StyledSkillsBackground = styled(StyledGlowingBackground)`
  @media only screen and (min-width: 768px) {
    padding: 80px 80px 40px 40px;
  }
`

export const StyledProjectsBackground = styled(StyledGlowingBackground)`
  @media only screen and (min-width: 768px) {
    padding: 80px 40px 40px 80px;
  }
`

export const StyledHomeBackground = styled(StyledGreyGridBackground)`
 box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
      0px 0px 2px ${(props) => props.theme.primaryC},
      0px 0px 5px ${(props) => props.theme.primaryC},
      0px 0px 20px ${(props) => props.theme.primaryC};
  ${flexCenter}
  min-height: 100vh;
`

export const StyledContactBackground = styled(StyledGlowingBackground)`
padding-bottom: 80px;
  @media only screen and (min-width: 768px) {
    padding: 80px 40px 120px 40px;
  }
`
/* BACKGROUNDS */

/* TABLES */
 export const StyledTable = styled.table`
    transition: 300ms ease-in;
    max-width: 800px;
    width: 100%;
    font-family: ${(props) => props.theme.primaryF};
    color: ${(props) => props.theme.thirdC};
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
    0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 20px ${(props) => props.theme.primaryC};
    margin: 40px auto;
    
    td,
    th {
      border: 1px solid ${(props) => props.theme.secondaryC};
      text-align: left;
      padding: 16px;
    }

    td {
    a {
        color: ${(props) => props.theme.thirdC};
    }

      a:hover {
          color: ${(props) => props.theme.primaryC}; 
      }
    }

    tr:nth-child(even) {
    background-color: ${(props) => props.theme.backgroundC};
    }

    tr:nth-child(odd) {
    background-color: ${(props) => props.theme.backgroundC};
    }

    @media only screen and (max-width: 768px) {
    th,
    td {
        padding: 12px;
       }

      th{
        display: none;
      }
      
      td{
        min-height: 44px;
        display: block;
      }
    }
`;
/* TABLES */

/* FORMS */

export const StyledForm = styled.form`
  margin-top: 36px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
    0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 20px ${(props) => props.theme.primaryC};
   padding: 20px;
    width: 100%;
    max-width: 560px;
    @media screen and (min-width: 768px) {
     padding: 40px;
    }
`;

export const StyledLabel = styled.label`
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.primaryC};
  width: inherit;
`;

export const StyledInput = styled.input`
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 0;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.thirdC};
  font-family: ${(props) => props.theme.secondaryF};
  color: #000000;
  resize: none;
  text-indent: 0.5rem;
  outline: none;
  ::placeholder{
    color: ${props => props.theme.secondaryC}
  }
`;

export const StyledInputControl = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 0.75rem 0;
    margin: 0 auto;

`;

export const StyledHelperText = styled.p`
  font-family: ${(props) => props.theme.primaryF};
  color: #ff0000;
  font-size: 0.8rem;
`;

/* FORMS */

/* ANIMATION */

export const StyledRandomX = styled.div`
  position: absolute;
  top: ${getRandomY};
  bottom: ${getRandomY};
  left: 0;
  right: 0;
`;

export const StyledRandomY = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${getRandomX};
  right: ${getRandomX};
`;

export const styledArrow = `
  position: absolute;
  display: block;
  z-index: 2;
`

export const StyledRightArrow = styled.span`
  ${styledArrow}
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${(props) => (props.color !== "blue" ? randomColor : props.theme.primaryC)});
  animation: rightArrow ${(props) => !props.speed ? randomSpeed : props.speed} linear infinite;

  @keyframes rightArrow {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
`;

export const StyledDownArrow = styled.span`
  ${styledArrow}
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, ${(props) => props.color !== "blue" ? randomColor : props.theme.primaryC});
  animation: downArrow ${(props) => !props.speed ? randomSpeed : props.speed} linear infinite;
  animation-delay: 0.5s;

  @keyframes downArrow {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
`;

export const StyledLeftArrow = styled.span`
  ${styledArrow}
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, ${(props) => props.color !== "blue" ? randomColor : props.theme.primaryC});
  animation: animate3 ${(props) => !props.speed ? randomSpeed : props.speed} linear infinite;
  animation-delay: 1s;

  @keyframes animate3 {
      0% {
          right: -100%;
      }
      50%,
      100% {
          right: 100%;
      }
  }
`;

export const StyledUpArrow = styled.span`
  ${styledArrow}
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, ${(props) => props.color !== "blue" ? randomColor : props.theme.primaryC});
  animation: upArrow ${(props) => !props.speed ? randomSpeed : props.speed} linear infinite;
  animation-delay: 1.5s;

  @keyframes upArrow {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;

export const StyledFadeAnimation = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 200ms;
  }
`;

/* ANIMATION */

/* NAVIGATION HEADER */

export const StyledNav = styled.nav`
  ${flexSpace}
  position: fixed;
  z-index: 20;
  width: 100%;
  max-width: 1920px;
  padding: 1rem 2rem ;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const StyledNavLogo = styled.a` 
  position: relative ;
  transition: 0.5s;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.primaryC};
  font-size: 2rem;
  font-weight: 600;
  
  ::after{
    content: "[AT]";
  }

  :hover{
    text-shadow: 1px 1px 5px ${(props) => props.theme.primaryC};
  }
`;

export const StyledNavLinkWrapper = styled.div`
  visibility: ${(props) => props.visible ? "visible" : "hidden"} ;
  position: absolute;
  width: 100%;
  top: 68px;
  left:0;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgb(0, 0, 0);
  ${flexCenter}
  flex-direction: column;
  padding-bottom: 1rem;

  a{
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    transition: none;
    ${flexSpace}
    flex-direction: row;
    visibility: visible;
    background: none;
    position: static;
    width: 380px;
    padding-bottom: 0; 

    a{
      margin: 0;
    }
  }
`;

export const StyledNavBurger = styled.button`
  position: relative;
  top: 0;
  transition: 0.5s;
  background: none;
  border: none;
  z-index: 1;
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  cursor: pointer;
  outline: none;
  :active > div, :hover > div {
      box-shadow: 0px 0px 1px ${(props) => props.theme.primaryC},
        0px 0px 1px ${(props) => props.theme.primaryC},
        0px 0px 10px ${(props) => props.theme.primaryC},
        0px 0px 40px ${(props) => props.theme.primaryC};
  } 

  div:nth-child(1) { 
      position: ${({ toggleValue }) => (toggleValue ? "absolute" : "static")};
      transform: ${({ toggleValue }) => (toggleValue ? "rotate(135deg)" : "")};
    }

   div:nth-child(2) {
    margin: 8px 0;
    display: ${({ toggleValue }) => (toggleValue ? "none" : "block")};
  }

   div:nth-child(3) {
    transform: ${({ toggleValue }) => (toggleValue ? "rotate(45deg)" : "")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavBurgerLine = styled.div`
    transition: 0.5s;
    width: 30px;
    height: 5px;
    background-color: ${(props) => props.theme.primaryC};
   
`

export const StyledNavLink = styled.a` 
  transition: 200ms ease-in;
  color: ${(props) => props.theme.thirdC};
  font-family: ${(props) => props.theme.secondaryF};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: ${(props) => props.theme.primaryC};
  }

  &.activeNavLink{
    color: ${(props) => props.theme.primaryC };
  }
`;

/* NAVIGATION HEADER */

export const StyledHomeText = styled.h1`
  margin: 0 1rem;
  font-size: calc(1.5rem + 5 * ((100vw - 320px) / 900));
  text-align: center;
  line-height: 56px;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.thirdC};
  text-shadow: 5px 4px 4px black;
`;

export const StyledPageWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledButton = styled.button`
font-family: ${(props) => props.theme.primaryF};
cursor: pointer;
position: relative;
display: block;
padding: 1.25rem;
margin: 30px auto 0 auto;
border: 2px solid ${(props) => props.theme.primaryC};;
color: ${(props) => props.theme.primaryC};
font-size: ${(props) => props.sm ? "1rem" : 'calc(1rem + 5 * ((100vw - 320px) / 700))'}; 
text-decoration: none;
text-transform: uppercase;
transition: 0.5s;
letter-spacing: 5px;
text-shadow: 2px 2px 4px black;
text-align: center;
overflow: hidden;
background-color: transparent;

&:hover {
  text-shadow: 4px 2px 4px black;
  background: ${(props) => props.theme.primaryC};
  color: ${(props) => props.theme.thirdC};;
  box-shadow: 0px 0px 4px ${(props) => props.theme.primaryC},
    0px 0px 10px ${(props) => props.theme.primaryC},
    0px 0px 20px ${(props) => props.theme.primaryC},
    0px 0px 80px ${(props) => props.theme.primaryC};
}
`;

export const StyledSubmitButton = styled(StyledButton)`
  border: none;
  
`

export const StyledList = styled.ul`
  
  display: ${props => props.display ? props.display : "block"};
  color: ${(props) => props.theme.thirdC};
  font-family: ${(props) => props.theme.secondaryF};
  line-height: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

export const StyledListItem = styled.li`
  font-size: 1.1rem;
  line-height: 28px;
  text-shadow: 1px 1px #000000; 
  font-family: ${(props) => props.theme.secondaryF};
  color: ${(props) => props.theme.thirdC};
`

export const StyledTitle = styled.h2`
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  font-weight: 600;
  margin: 1rem 0;
  font-size: ${(props) => props.sm ? "1.25rem" : "1.8rem" };
  color: ${(props) => props.theme.primaryC};
  font-family: ${(props) => props.theme.secondaryF};
  letter-spacing: 2px;
  word-spacing: 3px;
  text-transform: upperCase;
`;

export const StyledScrollIdFix = styled.div`
  display: block;
  position: relative;
  top: -68px;
  visibility: hidden;
  z-index: -2;
`

export const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledIconLink = styled.a `
    border-radius: 4px;
    width: 30px;
    height: 30px;
    transition: 300ms ease-in;

  :hover {
    background: ${(props) => props.theme.primaryC};
  }
`

export const StyledModalBackground = styled.div`
${flexCenter}
  z-index: 999999;
  position: fixed;
  padding: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`