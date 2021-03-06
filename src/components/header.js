import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"
import styled, { withTheme } from 'styled-components';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Pdf from './pdfs/karan_yadav_resume.pdf';


const logo = {
    fontSize: "1.5rem",
    fontFamily: "Megrim",
    color: "white",
    textShadow: "2px 2px grey",
    
}
const text = {
    fontSize: "1rem",
    fontFamily: "Space Mono",
    color: "white",
    transition: "left 0.5s"
}
const links = {
    textDecoration: 'none',
    transition: "0.25s ease",
    color: "white",
    height: "100%",
    width: "100%",
    "&:hover": {
        transitionDuration: ".2s",
        transform: "translateY(-5px)",
        color: "#FF4C29",   
    },
    "&:after": {
        transition: "0.25s ease",
    }
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

const headerContainer = {
    minWidth: "100%",
    height: "10%",
    backgroundColor: "#071c2b",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "1rem 3rem",
    boxSizing: "border-box",
    transition: "all .5s ease",
    position: "sticky",
    zIndex: 50,
}
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
    bottom: 0;
    color: white;
`
const header = () =>{
    let counter= 0;
    // const isBrowser = () => typeof window !== "undefined"
    // isBrowser() && window.location.replace(res.data)
    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }
    if (typeof window !== `undefined`) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
        var docheight = getDocHeight()
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100)
        //console.log(prevScrollpos+"," +currentScrollPos)
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            // document.getElementById("bottombar").style.bottom = "0";
        } else {
                document.getElementById("navbar").style.top = "-100%";
            counter+=1;
        }
        if(currentScrollPos == 0){// If user at top of page
            document.getElementById("navbar").style.opacity = "1";
            document.getElementById("bottombar").style.bottom = "-100%";
        }
        else{
            document.getElementById("navbar").style.opacity = "0.8";
        }
        if(pctScrolled < 10){
            document.getElementById("bottombar").style.bottom = "-100%";
        }
        else{
            document.getElementById("bottombar").style.bottom = "0";
        }
        prevScrollpos = currentScrollPos;
        }
    }
    
    return(
        <div style={headerContainer} id="navbar">
            <div style={logoContainer}>
                <LogoFont text="KYADAV" style={logo}/>
            </div>
            <div style={navContainer}>
                <TextHolder>
                    <Link to="/#experience" style={links}>
                        <TextHolder>Experience</TextHolder>
                    </Link>
                </TextHolder>

                <CodeFont text="&nbsp;|&nbsp;" style={text}/>

                <TextHolder>
                    <Link to="/#education" style={links}>
                        <TextHolder>Education</TextHolder>
                    </Link>
                </TextHolder>

                <CodeFont text="&nbsp;|&nbsp;" style={text}/>

                <TextHolder>
                    <Link to="/#projects" style={links}>
                        <TextHolder>Projects</TextHolder>
                    </Link>
                </TextHolder>

                <CodeFont text="&nbsp;|&nbsp;" style={text}/>

                <TextHolder>
                    <Link to="/#contact" style={links}>
                        <TextHolder>Contact</TextHolder>
                    </Link>
                </TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>
                    <a href = {Pdf} style={links}>
                        <TextHolder>Resume</TextHolder>
                    </a>
                </TextHolder>

            </div>
        </div>
    )
}
export default header;