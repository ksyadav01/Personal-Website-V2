import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"
import styled from 'styled-components';


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
const TextHolder = styled.div`
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    transition: 0.25s ease;
    &:hover {
        transition-duration: .2s;
        transform: translateY(-5px)
    }
    &:after {
        transition: 0.25s ease;
    }
    `

const headerContainer = {
    minWidth: "100%",
    height: "3%",
    backgroundColor: "#151515",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "1rem 3rem",
    boxSizing: "border-box",
    border: "1px solid red"
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
    return(
        <div style={headerContainer}>
            <div style={logoContainer}>
                <LogoFont text="KYADAV" style={logo}/>
            </div>
            <div style={navContainer}>
                <TextHolder>About Me</TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>Experience</TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>Education</TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>Projects</TextHolder>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <TextHolder>Resume</TextHolder>

            </div>
        </div>
    )
}
export default header;