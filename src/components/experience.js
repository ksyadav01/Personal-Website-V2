'use strict';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont";
import CodeFont from "./fonts/CodeFont";
import Experiences from "./experiences.js";
import styled from 'styled-components';
import LeftCarrotImage from "../images/LeftCarrot.png";
import RightCarrotImage from "../images/RightCarrot.png";
import ProfilePicture from "../images/ProfilePicture.jpg";


const ExperienceContainer = styled.div`
    width: 100%;
    background-color: #082032;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 8%;
    box-sizing: border-box;
    z-index: 5;
    height: 100%
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
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    height: 1000px;
`
const ExperienceLine = styled.div`
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left:30%;
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
        <ExperienceContainer>
            <ExperienceTitle>
                E X P E R I E N C E
            </ExperienceTitle>
            <ExperienceDescription>
                Where I've Worked At
            </ExperienceDescription>
            <ExperienceGrid>
                <Experiences></Experiences>
            </ExperienceGrid>
        </ExperienceContainer>
    )
}
export default Experience;