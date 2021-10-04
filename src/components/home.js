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
    background-color: #082032;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 3%;
    box-sizing: border-box;
    z-index: 5;
    height: 100%;
    padding-top: 5%;
`
const LeftOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    top: 0;
    bottom: 0;
    position: relative;
`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    align-items: center;
    //border: 1px solid white;
    height: 100%;
    `
const CurrentTechnologies = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //border: 1px solid red;
`
const LanguagesHeader = styled.div`
    font-size: 1.25rem;
    font-family: Space Mono;
    color: white;
    width: 100%;
    //border: 1px solid orange;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3%;

    //border-left: 2px solid white;
    border-bottom: 1px solid white;
    //border-radius: 20px;
`
const TechnologiesHeader = styled.div`
    font-size: 1.25rem;
    font-family: Space Mono;
    color: white;
    width: 100%;
    //border: 1px solid orange;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3%;

    //border-left: 2px solid white;
    //border-bottom: 1px solid white;
    border-top: 1px solid white;
    //border-radius: 20px;
`
const CurrentTechHeader = styled.div`
    font-size: 1.25rem;
    font-family: Space Mono;
    color: white;
    text-align: center;
    //text-decoration: underline;
    width: 100%;
`
const CurrentTechnologiesText = styled.div`
    font-size: 0.9rem;
    font-family: Space Mono;
    color: white;
    width: 90%;
    text-align: center;
    //border: 1px solid green;
`
const NameContainer = styled.div`
    width: 75%;
    border-bottom: 3px solid #FF4C29;
    `
const DescriptionContainer = styled.div`
    margin-top: 1rem;
    width: 75%;
    `
const StatusContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5rem;
    padding: 10px;
    //border: 3px solid #334756;
    border-radius: 20px;    
    `
const ImageContainer = styled.div`
    
    `
const NameIntro = styled.div`
    font-size: 3.5rem;
    font-family: Space Mono;
    color: white;
    margin-bottom: -3%;
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
    color: #FF4C29;
    transform:scale(1,2); 
    margin-right: 2%;
    font-family: sans serrif;
    //font-family: Space Mono;
    `   
const StatusRightSlash = styled.div`
    font-size: 10rem;
    font-family: Space Mono;
    color: #FF4C29;
    margin-right: -2%;
    `  
const StatusRightCarrot = styled.div`
    font-size: 10rem;
    color: #FF4C29;
    transform:scale(1,2);
    font-family: sans serrif;
    //font-family: Space Mono;
    `
const StatusHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

`
const StatusLeftRightHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 2px;

`
const StatusLeft = styled.div`
    flex: 5;
    font-size: 1rem;
    font-family: Space Mono;
    color: white;
    justify-content: center;
    
    overflow: hidden;
    white-space: nowrap;
    margin-right: 2%;   
    `
const StatusRight = styled.div`
    flex: 4;
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
        console.log("das")
        async function  SongFetch(){
            /* const url = "https://icanhazdadjoke.com/";
            const jokeStream = await fetch(url, {
              headers: {
                Accept: "application/json"
              }
            }); */
            console.log("1")
            const url = "/.netlify/functions/LastfmPuller";
            console.log("2")
            const songStream = await fetch(url);
            console.log("3")
            console.log(songStream)
            const jsonSong = await songStream.json();
            console.log("4")
            console.log(jsonSong);
            console.log(jsonSong.recenttracks.track[0].name)
            //const song = jsonSong.joke;
            //return joke;
            
        }
        console.log("ppsa")
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
                            of 2022. If you think I'm a good fit, feel free to <a style={{color: "#71e9fd"}} href="/#contact">contact</a> me! {/** add link to contact page here */}
                        </Description>
                    </DescriptionContainer>
                    <StatusContainer>
                        <StatusLeftCarrot>
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
                            /
                        </StatusRightSlash>
                        <StatusRightCarrot>
                            {">"}
                        </StatusRightCarrot>
                    </StatusContainer>
                </LeftContainer>
            </LeftOuterContainer>
            <RightContainer>
                    <img style={{width: "80%", border: "1px solid black", borderRadius: "20px"}} alt="Profile Picture" src={ProfilePicture}></img>
                <CurrentTechnologies>
                    <LanguagesHeader>
                        <CurrentTechHeader>
                             Languages
                        </CurrentTechHeader>
                        <CurrentTechnologiesText>
                            Java | Python | JavaScript | C++ | HTML | CSS | Assembly | Bash
                        </CurrentTechnologiesText>
                    </LanguagesHeader>
                    <TechnologiesHeader>
                        <CurrentTechHeader>
                             Technologies
                        </CurrentTechHeader>
                        <CurrentTechnologiesText>
                            Git/GitHub | React | React Native | Expo | Flask | Heroku | Mongo DB | Firebase 
                        </CurrentTechnologiesText>
                    </TechnologiesHeader>
                </CurrentTechnologies>
            </RightContainer>
        </HomeContainer>
    )
}
export default Home;