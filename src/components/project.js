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
import Projects from "./projects.js"

const ProjectsContainer  = styled.div`
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
const ProjectsTitle = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 3rem;
`
const ProjectsDescription = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1.5rem;
`

const Projects = (props) =>{
    
    
    return(
        <ProjectsContainer>
            <ProjectsTitle>
                P R O J E C T S
            </ProjectsTitle>
            <ProjectsDescription>
                Some Of My Creations
            </ProjectsDescription>
            <Projects>

            </Projects>
        </ProjectsContainer>
    )
}
export default Projects;