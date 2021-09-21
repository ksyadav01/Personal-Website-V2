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
    padding-top: 5%;
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
    text-align: center;
`
const YearsWorked = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1rem;
    white-space: nowrap;
`
const DashLeftLine = styled.div`
    grid-area: secondGap;
    width: 100%;
    height: 50%;
    right: 0;
    border-bottom: 3px solid #334756;
`
const ImageBackground = styled.div`
    width: 100%;   
    display: flex;

    justify-content: center;
    align-items: center;
    z-index: 3;
    grid-area: LogoLine;
    position: relative;
    

`
const ImageHolderHolder = styled.div`
    height: 80px;
    width: 100%;
    background-color: white;   
    display: flex;

    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: 40px;
`
const ImageHolder = styled.img`
    grid-column: 1/ span 1;
    z-index: 6; 

    justify-content: center;
    align-items: center;
`
const MiddleLine= styled.div`
    border-right: 1px solid #FF4C29;
    height: 400%;
    width: 100%;
    position: absolute;
    right: 40px;
    z-index: -1;
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
    font-size: 1.25rem;
    border-bottom: 2px solid #FF4C29;
    border-radius: 5px;
    
    text-align: center;
`
const InfoSubHeader = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 0.75rem;
    padding-bottom: 5%;
`
const InfoText = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
    padding-left: 5%;
    padding-right: 5%;
`
const WorkExperience = (props) =>{
    
    
    return(
        <ExperienceHolder>
            <TitleArea>
                <Company>
                    {props.Company}
                </Company>
                <YearsWorked>
                    {props.Time}
                </YearsWorked>
            </TitleArea>
            <DashLeftLine />

            <ImageBackground>
                <ImageHolderHolder>
                    <ImageHolder src={props.ImgSRC}></ImageHolder>
                </ImageHolderHolder>
                {/* <MiddleLine /> */}
            </ImageBackground>

            <DashRightLine />
            
            <InfoHolder>
                <InfoHeader>
                    {props.JobTitle}
                </InfoHeader>
                <InfoSubHeader>
                    {props.FormerPosition}
                </InfoSubHeader>
                <InfoText>
                    {props.JobDesc}
                </InfoText>

            </InfoHolder>
        </ExperienceHolder>
    )
}
export default WorkExperience;