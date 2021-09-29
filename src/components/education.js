'use strict';
import React, { useState, useEffect } from 'react';
import Educations from "./educations.js";
import styled from 'styled-components';
import IvyScope from "../images/IvyScope.png";
import SBULogo from "../images/SBULogo.png";
import ShakerLogo from "../images/ShakerLogo.png";
import GCOM from "../images/GCOM.png";

const EducationContainer = styled.div`
    width: 100%;
    background-color: #082032;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 8%;
    padding-bottom: 8%;
    box-sizing: border-box;
    z-index: 5;
    //margin-bottom: 16%;
`
const EducationTitle = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 3rem;
`
const EducationDescription = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1.5rem;
`
const EducationGrid = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: relative;
    height: 100%;
`
const Filler = styled.div`
    height: 10vh;
    width: 100%;
    box-sizing: border-box;
`
const Education = () =>{
    const StonyCoursework = ["Software Development", "Data Structures", "Computer Networks", "Scripting Languages"
    , "Programming Abstractions", "Systems Fundamentals 1", "Discrete Math", "Probability & Statistics"
    , "Calculus 2", "Linear Algebra"];
    return(
        <EducationContainer id="education">
            <EducationTitle>
                E D U C A T I O N
            </EducationTitle>
            <EducationDescription>
                Where I've Studied
            </EducationDescription>
            <EducationGrid>
                <Educations School="Stony Brook University" Time="Aug 2019 - Present" ImgSRC={SBULogo}
                    Major="Computer Science Major"
                    Description="Relevant Coursework:"
                    RelevantCoursework={StonyCoursework}/>
                <Filler />
                <Educations School="Shaker High School" Time="Sep 2015 - Jun 2019" ImgSRC={ShakerLogo}
                    Major= "General Education"
                    Description = "- Lead Motion-Coordinator and assistant programmer of the Shaker Robotics Team"
                    Description2 = "- Regents Diploma with Honors"
                    
                    RelevantCoursework={""}/>
                    
                <Filler />
            </EducationGrid>
        </EducationContainer>
    )
}
export default Education;