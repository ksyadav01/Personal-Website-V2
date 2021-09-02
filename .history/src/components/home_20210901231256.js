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
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `
const NameContainer = styled.div`
    flex: 1;
    `

const homeContainer = {
    width: "100%",
    backgroundColor: "#151515",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "1rem 3rem"
}
const logoContainer = {
    display: "flex",
    alignItems: "flex-end",
    flex: 2,
    padding: "1rem 3rem"
}
const navContainer = {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    padding: "1rem 3rem"
}
const home = () =>{
    return(
        <div style={homeContainer}>
            <LeftContainer>
                <NameContainer>
                    
                </NameContainer>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </div>
    )
}
export default home;