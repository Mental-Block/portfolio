import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import {
  StyledNav, 
  StyledNavBurger, 
  StyledNavBurgerLine,
  StyledNavLinkWrapper, 
  StyledNavLogo,
  StyledNavLink,
  StyledFadeAnimation,
  StyledIconLink,
  StyledIcon
} from "../css"
import useEvent from "../use/useEvent";

import { BREAKPOINT, ACTIVE_NAV_LINK_CLASSNAME, EVENTS } from "../const";

const Header = () => {
  return (
    <>
        <StyledNav>
           <StyledNavLogo  href='#home'/> 
          <Burger />
        </StyledNav>
    </>
  );
};

const Burger = () => {
  const [menuOpen, setMenu] = useState(window.innerWidth <= BREAKPOINT.tablet  ? false : true); 
  const [currentActiveLinkID, setCurrentActiveLink] = useState("navHome")

  useEvent(
    EVENTS.resize,
    () => {
      if (window.innerWidth >= BREAKPOINT.tablet) {
        setMenu(true)
      } 
    },
    { target: window }
  )

  useEvent(EVENTS.scroll, () => {
    const getHTMLElementBoxHeight = (htmlElement) => {
      return htmlElement.getBoundingClientRect().height
    }

    const checkClassExists = (htmlElment, className) => {
      return htmlElment.classList.contains(className)
    }

    const removeClass = (htmlElement, className) => {
      htmlElement.classList.remove(className)
    }

    const addClass = (htmlElement, className) => {
      htmlElement.classList.add(className)
    }  
    
    const addPrevNum = () => {
      let store = {
        sum: 0
      };
      
      return function(num = 0) {
        store.sum += num;
        return store.sum;
      };
    };

    /* NAVIGATION_BAR_HEIGHT is needed as CSS position:fixed; takes 0px
    in the DOM but is rendered so we need to subtract px so the hrefs match up 
    with the id's as I used a <div> on the first off and not <StyledScrollIdFix>*/
    const NAVIGATION_BAR_HEIGHT = 68; 
    const START_HEIGHT = 0; // the height of the DOM when user first loads
    const scrollY = window.scrollY;

    const scrollFixIds = Array.from(document.querySelectorAll('div[data-scroll-fix]'));
    const navLinks = Array.from(document.querySelectorAll('a[data-nav-link]'));

    const getAllSectionHeights = scrollFixIds.map(id => getHTMLElementBoxHeight(id));

    getAllSectionHeights[0] = (getAllSectionHeights[0] - NAVIGATION_BAR_HEIGHT); // I know I'm manipulating the orginal data please don't sue    
    const sectionHeights = [START_HEIGHT, ...getAllSectionHeights];

      let newHeight = addPrevNum()
      let oldHeight = addPrevNum()

      for (let index = 0; index < navLinks.length; index++) {
        let bottomHeight = oldHeight(sectionHeights[index])
        let topHeight = newHeight(sectionHeights[index + 1])

        if((scrollY >= bottomHeight) && (scrollY < topHeight)){
          if(!checkClassExists(navLinks[index], ACTIVE_NAV_LINK_CLASSNAME)){
            navLinks.map((link) => removeClass(link, ACTIVE_NAV_LINK_CLASSNAME))
          } 
          setCurrentActiveLink(navLinks[index].id)
          addClass(navLinks[index], ACTIVE_NAV_LINK_CLASSNAME)
        } 
      }
  })

  const NAV_LINKS = [
    {
      id:"navHome",
      title: "Home",
      href: "#home",
    }, 
    {
      id:"navProjects",
      title: "Projects",
      href: "#projects",
    },
    {
      id:"navTech",
      title: 'Tech',
      href: '#tech'
    },
    {
      id:"navContact",
      title: "Contact",
      href: "#contact",
    },
    
  ]
  
  

  return (
    <>
        <StyledFadeAnimation>
          <SwitchTransition>
            <CSSTransition key={menuOpen} classNames={"fade"} timeout={200}>
                <StyledNavLinkWrapper visible={menuOpen}>
                  {
                    NAV_LINKS.map((props) => (
                      <StyledNavLink
                        data-nav-link
                        id={props.id}
                        key={props.id}
                        href={props.href}
                        className={props.id === currentActiveLinkID ? ACTIVE_NAV_LINK_CLASSNAME  : '' }
                        >
                        {props.title}
                      </StyledNavLink>
                    ))
                  }
                  <StyledNavLink href="/resume.pdf" download>
                    Resume
                  </StyledNavLink>
                  <StyledIconLink href="https://github.com/Mental-Block" target="_blank" rel="noopener noreferrer">
                    <StyledIcon src="images/github.svg" />
                  </StyledIconLink>
                </StyledNavLinkWrapper> 
            </CSSTransition>
          </SwitchTransition>
        </StyledFadeAnimation>
        <StyledNavBurger
        toggleValue={menuOpen}
        onClick={() => setMenu(!menuOpen)}
        >
          <StyledNavBurgerLine />
          <StyledNavBurgerLine />
          <StyledNavBurgerLine />
        </StyledNavBurger>
    </>
  );

};

export default Header