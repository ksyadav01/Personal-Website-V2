'use strict';
import React, { useState, useEffect } from 'react';
import Experiences from "./experiences.js";
import styled from 'styled-components';
import IvyScope from "../images/IvyScope.png";
import SBULogo from "../images/SBULogo.png";
import GCOM from "../images/GCOM.png";

const ExperienceContainer = styled.div`
    width: 100%;
    background-color: #082032;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 15%;
    padding-bottom: 8%;
    box-sizing: border-box;
    z-index: 5;
    //margin-bottom: 16%;
`
const ExperienceTitle = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 3rem;
`
const ExperienceDescription = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1.5rem;
`
const ExperienceGrid = styled.div`
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
const ExperienceLine = styled.div`
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 30%;
        border-left: 3px solid #FF4C29;
`
const Experience = () =>{
    
    const [CurrentSong, setCurrentSong] = useState();
    useEffect(()=>{
        async function SongFetch(){
            let response = await fetch(process.env.LASTFM_KEY)
            response = await response.json();
            setCurrentSong(response.recenttracks.track[0].name + " by " +response.recenttracks.track[0].artist["#text"]);
            
        }
        SongFetch() 
    },[]);
    return(
        <ExperienceContainer id="experience">
            <ExperienceTitle>
                E X P E R I E N C E
            </ExperienceTitle>
            <ExperienceDescription>
                Where I've Worked At
            </ExperienceDescription>
            <ExperienceGrid>
                <Experiences Company="IvyScope" Time="July 2021 - Present" ImgSRC={IvyScope}
                    JobTitle="Lead Full Stack Developer" FormerPosition="Formerly Full Stack Intern"
                    JobDesc="Primarily working with other developers to revamp frontend webpages, along with cleaning up and 
                    refactoring the backend database modal. This is done using the Materials UI Framework for increasing 
                    frontend functionality and MongoDB Compass for managing the backend database."/>
                <Filler />
                <Experiences Company="Stony Brook University" Time="Feb 2021 - May 2021" ImgSRC={SBULogo}
                    JobTitle={"Teaching Assistant for \n System Fundamentals (CSE 220)"} FormerPosition=""
                    JobDesc="Led a weekly recitation session of ~30 students where I reviewed lecture material and
                    taught new material. Outside of weekly discussions, I held office hours where students could come in
                    with their class-related problems and questions. I also helped students with their MIPS Assembly questions
                    on a various array of platforms, including Piazza, Discord, and Slack among others."/>
                <Filler />
                <Experiences Company="GCOM Software" Time="Feb 2019 - May 2019" ImgSRC={GCOM}
                    JobTitle={"Computer Science Intern"} FormerPosition=""
                    JobDesc="Developed software in Java that pulled/parsed data and would notify employees via email 
                    for prescheduled company events, whether it be meetings or an afternoon office party. Researched into 
                    databases and datastructures and learnd how to implement them."/>
            </ExperienceGrid>
        </ExperienceContainer>
    )
}
export default Experience;