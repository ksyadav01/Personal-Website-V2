import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"
import styled, { withTheme } from 'styled-components';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';


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
    height: "3%",
    backgroundColor: "#071c2b",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "1rem 3rem",
    boxSizing: "border-box",
    transition: "all .3s ease",
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
const header = () =>{

    if (typeof window !== 'undefined') {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
            || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
            || (prevScrollpos <= 0 && currentScrollPos <= 0)
            ) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-5rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
        }
    }
    
    return(
        <div style={headerContainer} id="navbar"
        data-sal="fade"
        data-sal-delay="30"
        data-sal-easing="ease">
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
                    <Link to="/education/" style={links}>
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
                    <Link to="/contact/" style={links}>
                        <TextHolder>Contact</TextHolder>
                    </Link>
                </TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>Resume</TextHolder>

            </div>
        </div>
    )
}
export default header;