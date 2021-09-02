import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"

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
    
}
const headerContainer = {
    width: "100%",
    height: "3rem",
    backgroundColor: "#151515",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "1rem 3rem"
}
const logoContainer = {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    padding: "1rem 3rem"
}
const navContainer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
                <CodeFont text="About Me" style={text}/>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <CodeFont text="Experience" style={text}/>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <CodeFont text="Education" style={text}/>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <CodeFont text="Projects" style={text}/>
                <CodeFont text="&nbsp;|&nbsp;" style={text}/>
                <CodeFont text="Resume" style={text}/>

            </div>
        </div>
    )
}
export default header;