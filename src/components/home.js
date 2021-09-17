'use strict';
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
    box-sizing: border-box;
`
const LeftOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60rem;
    `
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40rem;
    `
const NameContainer = styled.div`
    width: 35rem;
    border-bottom: 1px solid white;
    `
const DescriptionContainer = styled.div`
    margin-top: 1rem;
    width: 35rem;
    `
const StatusContainer = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5rem;
    `
const ImageContainer = styled.div`
    
    `
const NameIntro = styled.div`
    font-size: 3.5rem;
    font-family: Space Mono;
    color: white;
    `
const Name = styled.div`
    font-size: 5rem;
    font-family: Space Mono;
    color: white;
    `
const Description = styled.div`
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    `
     
const StatusLeftCarrot = styled.div`
    font-size: 10rem;
    
    font-weight: 400;
    color: white;
    transform:scale(1,2); 
    mergin-right: -50%;
    `   
const StatusRightSlash = styled.div`
    font-size: 10rem;
    font-family: Space Mono;
    color: white;
    margin-right: -2rem;
    `  
const StatusRightCarrot = styled.div`
    font-size: 10rem;
    color: white;
    transform:scale(1,2); 
    mergin-left: -50%;
    `
const StatusHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;

`
const StatusLeftRightHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 2px;

`
const StatusLeft = styled.div`
    flex: 1;
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    `
const StatusRight = styled.div`
    flex: 1;
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    `
const Image = styled.div`
    width: 30rem;
    `

const Home = () =>{
    
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
        <HomeContainer>
            <LeftOuterContainer>
                <LeftContainer>
                    <NameContainer>
                        <NameIntro>
                            Hello, I'm
                        </NameIntro>
                        <Name>
                            Karan Yadav
                        </Name>
                    </NameContainer>
                    <DescriptionContainer>
                        <Description>
                            I'm a Software Developer based out of upstate New York and currently attend Stony Brook University. Currently 
                            pursuing a major in Computer Science, I love learning new technologies and programming languages, along with
                            applying those newly learned skills to my projects. I am actively seeking a full time internship for the Summer 
                            of 2022. If you think I'm a good fit, feel free to <a style={{color: "#71e9fd"}}>contact</a> me! {/** add link to contact page here */}
                        </Description>
                    </DescriptionContainer>
                    <StatusContainer>
                        <StatusLeftCarrot>
                            {/* <img alt="Left Carrot" style={{height: "10rem"}} src={LeftCarrotImage} /> */}
                            {"<"}
                        </StatusLeftCarrot>
                        <StatusHolder>
                            <StatusLeftRightHolder>
                                <StatusLeft>
                                    this.recentlyPlayedSong =&nbsp;
                                </StatusLeft>
                                <StatusRight style={{color: "#ff6d9d"}}>
                                    {CurrentSong}
                                </StatusRight>
                            </StatusLeftRightHolder>
                            
                            <StatusLeftRightHolder>
                                <StatusLeft>
                                    this.newestTechnologies =&nbsp;
                                </StatusLeft>
                                <StatusRight style={{color: "#50ed57"}}>
                                    Gatsby/Netlify&nbsp;&nbsp;|&nbsp;C++
                                </StatusRight>
                            </StatusLeftRightHolder>

                            <StatusLeftRightHolder>
                                <StatusLeft>
                                    this.latestWatchedTVShow =&nbsp;
                                </StatusLeft>
                                <StatusRight style={{color: "#71e9fd"}}>
                                     <a style={{color: "#71e9fd", textDecoration: "none"}} 
                                        href="https://www.amazon.com/Mr-Robot-Season-1/dp/B00YBX664Q">Mr. Robot</a>
                                </StatusRight>
                            </StatusLeftRightHolder>

                            <StatusLeftRightHolder>
                                <StatusLeft>
                                    this.partTimeJob =&nbsp;
                                </StatusLeft>
                                <StatusRight style={{color: "#f1fa8c"}}>
                                    Full Stack Developer at IvyScope
                                </StatusRight>
                            </StatusLeftRightHolder>
                            
                            <StatusLeftRightHolder>
                                <StatusLeft>
                                    this.currentPersonalProject =&nbsp;
                                </StatusLeft>
                                <StatusRight style={{color: "#bd93da"}}>
                                    Ping App
                                </StatusRight>
                            </StatusLeftRightHolder>
                        </StatusHolder>
                        <StatusRightSlash>
                            {/* <img alt="Right Carrot" src={RightCarrotImage} /> */}
                            /
                        </StatusRightSlash>
                        <StatusRightCarrot>
                            {">"}
                        </StatusRightCarrot>
                    </StatusContainer>
                </LeftContainer>
            </LeftOuterContainer>
            <RightContainer>
                <ImageContainer>
                    <img style={{width: "25rem", border: "1px solid black", borderRadius: "20px"}} alt="Profile Picture" src={ProfilePicture}></img>
                </ImageContainer>
            </RightContainer>
        </HomeContainer>
    )
}
export default Home;