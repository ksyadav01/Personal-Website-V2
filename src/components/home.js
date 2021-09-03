import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"
import CodeFont from "./fonts/CodeFont"
import styled from 'styled-components';
import LeftCarrotImage from "../images/LeftCarrot.png";
import RightCarrotImage from "../images/RightCarrot.png";
import ProfilePicture from "../images/ProfilePicture.jpg";

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
const HomeContainer = styled.div`
    width: 100%;
    background-color: #151515;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: "1rem 3rem";
    justify-content: space-around;
    padding-top: 10rem;
`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    `
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30rem;
    `
const NameContainer = styled.div`
width: 100%;
    
    
    border: 1px solid blue;
    `
const DescriptionContainer = styled.div`
width: 100%;
    
    border: 1px solid red;
    `
const StatusContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid green;
    align-items: center;
    `
const ImageContainer = styled.div`
    
    border: 1px solid orange;
    `
const Name = styled.div`
    font-size: 4rem;
    font-family: Space Mono;
    color: white;
    `
const Description = styled.div`
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    `
     
const StatusLeftCarrot = styled.div`
    font-size: 8rem;
    font-family: Space Mono;
    color: white;
    `   
    
const StatusRightCarrot = styled.div`
    font-size: 8rem;
    font-family: Space Mono;
    color: white;
    `
const Status = styled.div`
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    `
const Image = styled.div`
    width: 30rem;
    `

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
        <HomeContainer>
            <LeftContainer>
                <NameContainer>
                    <Name>
                        Hello, I'm {"\n"} Karan Yadav
                    </Name>
                </NameContainer>
                <DescriptionContainer>
                    <Description>
                        I'm a Software Engineer based out of upstate New York and fill
                        this out later ahhhhhh hhhhhh hsdjaj bsjdbjs kjh djkhsbj  shjk akj
                        hs adkjhasd kjh
                    </Description>
                </DescriptionContainer>
                <StatusContainer>
                    <StatusLeftCarrot>
                        <img alt="Left Carrot" src={LeftCarrotImage} />
                    </StatusLeftCarrot>
                    <Status>
                        future problem
                    </Status>
                    <StatusRightCarrot>
                        <img alt="Right Carrot" src={RightCarrotImage} />
                    </StatusRightCarrot>
                </StatusContainer>
            </LeftContainer>
            <RightContainer>
                <ImageContainer>
                    <img style={{width: "30rem"}} alt="Profile Picture" src={ProfilePicture}></img>
                </ImageContainer>
            </RightContainer>
        </HomeContainer>
    )
}
export default home;