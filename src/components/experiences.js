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
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-template-rows: 100%;
    grid-template-areas:
        "title title title secondGap LogoLine thirdGap Info Info Info Info";

    padding-top: 8%;
`
const TitleArea = styled.div`
    grid-area: title;
    height: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Company = styled.div`

`
const YearsWorked = styled.div`
`
const ImageBackground = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-width: 1px;
    border-radius: 25px;

    position: relative;
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
                pogger hands
            </TitleArea>
            <ImageBackground>
                <ImageHolder src={IvyScope}></ImageHolder>
                <Line></Line>
            </ImageBackground>
        </ExperienceHolder>
    )
}
export default WorkExperience;