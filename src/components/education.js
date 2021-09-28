'use strict';
import React, { useState, useEffect } from 'react';
import Experiences from "./experiences.js";
import styled from 'styled-components';
import IvyScope from "../images/IvyScope.png";
import SBULogo from "../images/SBULogo.png";
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
`
const Education = () =>{
    
    return(
        <EducationContainer id="experience">
            <EducationTitle>
                E X P E R I E N C E
            </EducationTitle>
            <EducationDescription>
                Where I've Worked At
            </EducationDescription>
            <EducationGrid>
                <Educations Company="IvyScope" Time="July 2021 - Present" ImgSRC={IvyScope}
                    JobTitle="Lead Full Stack Developer" FormerPosition="Formerly Full Stack Intern"
                    JobDesc="Primarily working with other developers to revamp frontend webpages, along with cleaning up and 
                    refactoring the backend database modal. This is done using the Materials UI Framework for increasing 
                    frontend functionality and MongoDB Compass for managing the backend database."/>
                <Filler />
                <Educations Company="Stony Brook University" Time="Feb 2021 - May 2021" ImgSRC={SBULogo}
                    JobTitle={"Teaching Assistant for \n System Fundamentals (CSE 220)"} FormerPosition=""
                    JobDesc="Led a weekly recitation session of ~30 students where I reviewed lecture material and
                    taught new material. Outside of weekly discussions, I held office hours where students could come in
                    with their class-related problems and questions. I also helped students with their MIPS Assembly questions
                    on a various array of platforms, including Piazza, Discord, and Slack among others."/>
                <Filler />
                <Educations Company="GCOM Software" Time="Feb 2019 - May 2019" ImgSRC={GCOM}
                    JobTitle={"Computer Science Intern"} FormerPosition=""
                    JobDesc="Developed software in Java that pulled/parsed data and would notify employees via email 
                    for prescheduled company events, whether it be meetings or an afternoon office party. Researched into 
                    databases and datastructures and learnd how to implement them."/>
            </EducationGrid>
        </EducationContainer>
    )
}
export default Education;