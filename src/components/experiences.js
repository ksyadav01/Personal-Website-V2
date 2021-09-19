'use strict';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont";
import CodeFont from "./fonts/CodeFont";
import Experiences from "./experiences.js";
import styled from 'styled-components';
import LeftCarrotImage from "../images/LeftCarrot.png";
import RightCarrotImage from "../images/RightCarrot.png";
import IvyScope from "../images/IvyScope.png";


const ExperienceHolder = styled.div`
    width: 100%;
    background-color: #082032;
    display: grid;
    grid-template-columns: 10% 10% 10% 80px 10% 10% 10% 10% 15% 5%;
    grid-template-rows: 100%;
    grid-template-areas:
        "title title secondGap LogoLine thirdGap info info info info .";

    padding-top: 8%;
`
const TitleArea = styled.div`
    grid-area: title;
    height: 100%;
    //border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: linear-gradient(to right, #ccc 50%, maroon 50%) bottom,
    // linear-gradient(to right, maroon 50%, #ccc 50%) top;
    // background-repeat: no-repeat;
    // background-size:100% 2px;
`
const Company = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1.75rem;
`
const YearsWorked = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1rem;
    text: nowrap;
`
const DashLeftLine = styled.div`
    grid-area: secondGap;
    width: 100%;
    height: 50%;
    right: 0;
    border-bottom: 3px solid #334756;
`
const ImageBackground = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-width: 1px;
    border-radius: 40px;
    margin-top: 100%; //Padding in job description caused it
    // z-index: 3;
    grid-area: LogoLine;
    

`
const ImageHolder = styled.img`
    height: 80%;
    z-index: 6;

`
const Line = styled.div`
    //position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid yellow;
`
const DashRightLine = styled.div`
    grid-area: thirdGap;
    width: 100%;
    height: 50%;
    right: 0;
    border-bottom: 3px solid #334756;
`
const InfoHolder = styled.div`
    grid-area: info;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #2C394B;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3%;
`
const InfoHeader = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
`
const InfoSubHeader = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 0.75rem;
`
const InfoText = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
`
const WorkExperience = () =>{
    
    
    return(
        <ExperienceHolder>
            <TitleArea>
                <Company>
                    IvyScope
                </Company>
                <YearsWorked>
                    July 2021 - Present
                </YearsWorked>
            </TitleArea>
            <DashLeftLine />

            <ImageBackground>
                <ImageHolder src={IvyScope}></ImageHolder>
                
            </ImageBackground>

            <DashRightLine />
            
            <InfoHolder>
                <InfoHeader>
                    Lead Full Stack Developer
                </InfoHeader>
                <InfoSubHeader>
                    Formerly Full Stack Intern
                </InfoSubHeader>
                <InfoText>
                    Primarily working with other developers to revamp frontend webpages, along with cleaning up and 
                    refactoring the backend database modal. This is done using the Materials UI Framework for increasing 
                    frontend functionality and MongoDB Compass for managing the backend database.
                </InfoText>

            </InfoHolder>
        </ExperienceHolder>
    )
}
export default WorkExperience;