import React from "react";

import "normalize.css";
import 'react-gallery-carousel/dist/index.css';

import {ThemeProvider} from "styled-components"

import THEME, {
  StyledGlobal,
  StyledPageWrapper, 
  StyledScrollIdFix,
} from "./css"

import Home from "./components/Home"
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const App = () => {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <StyledGlobal />
        <StyledPageWrapper> 

          <Header />

            <div id='home' />
            <div data-scroll-fix>
              <Home  />
            </div>
            
            
            <div data-scroll-fix> 
              <StyledScrollIdFix id='projects' />
              <Projects />   
            </div>

              <div data-scroll-fix>
                <StyledScrollIdFix id='tech' />
                <Skills />
              </div>
            
            
            <div data-scroll-fix>
              <StyledScrollIdFix id="contact" />
              <Contact  /> 
            </div>
            
            
        </StyledPageWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;