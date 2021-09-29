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
import ProjRight from "./projectsRight.js"
import ProjLeft from "./projectsLeft"
import PingProject from '../images/PingProject.png';
import KARANGG from '../images/KARANGG.png';
import WorldDataMapper from '../images/WorldDataMapper.png';

const ProjectsContainer  = styled.div`
    width: 100%;
    background-color: #082032;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    margin-bottom: 5%;
`
const IndividualProjectsHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
`

const Projects = (props) =>{
    const PingTechnologies = ['react-native','|','firebase','|','expo','|','github']
    const PingLanguages = ['javascript','|','html','|','css']
    const KARANGGTechnologies = ['riot api','|','flask','|','plotly','|','github']
    const KARANGGLanguages = ['python']
    const WorldMapperTechnologies = ['react','|','mongo db','|','graphql','|','mern stack','|','github']
    const WorldMapperLanguages = ['JavaScript','|','html','|','css']
    
    return(
        <ProjectsContainer id="projects" >
            <ProjectsTitle>
                P R O J E C T S
            </ProjectsTitle>
            <ProjectsDescription>
                Some Of My Creations
            </ProjectsDescription>
            <IndividualProjectsHolder>
                <ProjRight PingProject={PingProject} Title="Ping"
                    MiniDescription="An event creating app designed by students for students"
                    BodyText="Ping changes how college students can interact with each other and meet new people. Utilizing Google Maps 
                        API, users can create location-tagged events in seconds that anyone with the app can then access through
                        our map."
                    FontSize="0.9rem"
                    Technologies={PingTechnologies} Featured={true} Languages={PingLanguages} 

                    GitHub={"https://www.github.com/ksyadav01/Ping"}>
                </ProjRight>

                <ProjLeft PingProject={KARANGG} Title="KARAN.GG"
                    MiniDescription="An OP.GG alternative with better results"
                    BodyText="KARAN.GG is a stat tracker and analyzer for the popular MOBA League of Legends. Although many
                        competitors already exist, KARAN.GG provides unique data back to the user that others don't
                        offer, including duo winrates and individual champion winrates."
                    FontSize={(225/249) * 0.9+"rem"}
                    Technologies={KARANGGTechnologies} Featured={false} Languages={KARANGGLanguages} 
                    GitHub={"https://www.github.com/ksyadav01/KARAN.GG"}>
                </ProjLeft>

                <ProjRight PingProject={WorldDataMapper} Title="World Data Mapper"
                    MiniDescription="Tracking world data hasn't been easier"
                    BodyText="A map creating website where users create their own custom maps and provide attributes. 
                        Ranging from creating a map of the real world or creating a fantasy world  with your own custom information,
                         there are numerous possibilities with what one can do."
                    FontSize={(225/249) * 0.9+"rem"}
                    Technologies={PingTechnologies} Featured={false} Languages={PingLanguages} 
                    GitHub={"https://www.github.com/ksyadav01/-CSE-Final-Project"}>
                </ProjRight>
            </IndividualProjectsHolder>
        </ProjectsContainer>
    )
}
export default Projects;