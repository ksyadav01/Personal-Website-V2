import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"
import styled, { withTheme } from 'styled-components';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Pdf from './pdfs/karan_yadav_resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
const UpIcon = {
    fontSize: "4rem",
    color: "#FF4C29",
    
}
const TextHolder = styled.div`
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    transition: 0.25s ease;
    &:hover {
        transition-duration: .2s;
        transform: translateY(-2.5px);
        color: #FF4C29;
    }
    &:after {
        transition: 0.25s ease;
    }
    `

const ToTopContainer = styled.div`
    width: 10%;
    height: 10%;
    //background-color: #071c2b;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem 3rem;
    box-sizing: border-box;
    transition: all .5s ease;
    position: sticky;
    bottom: -100%;
    z-index: 50;
    color: white;
`
const logoContainer = {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    padding: "1rem 3rem"
}
const navContainer = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    padding: "1rem 3rem"
}
const BackToTopHolder = styled.div`
    position: sticky;
    color: white;
`
const toTop = () =>{
    // let counter= 0;
    // // const isBrowser = () => typeof window !== "undefined"
    // // isBrowser() && window.location.replace(res.data)
    // if (typeof window !== `undefined`) {
    //     var prevScrollpos1 = window.pageYOffset;
    //     window.onscroll =()=> {
    //     var currentScrollPos1 = window.pageYOffset;
    //     //console.log(prevScrollpos+"," +currentScrollPos)
    //     if (prevScrollpos1 > currentScrollPos1) {
    //         document.getElementById("bottombar").style.bottom = "0";
    //     } else {
    //             document.getElementById("bottombar").style.bottom = "-100%";
    //         counter+=1;
    //     }
    //     // if(currentScrollPos1 == 0){// If user at top of page
    //     //     document.getElementById("bottombar").style.opacity = "1";
    //     // }
    //     // else{
    //     //     document.getElementById("bottombar").style.opacity = "0.8";
    //     // }
    //     prevScrollpos1 = currentScrollPos1;
    //     }
    // }
    return(
        <ToTopContainer id="bottombar">
            <div  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <FontAwesomeIcon style={UpIcon} icon={faChevronCircleUp} onCLick={()=>window.scrollTo(0, 0)}/>
            </div>
        </ToTopContainer>
    )
}
export default toTop;