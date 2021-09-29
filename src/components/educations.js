'use strict';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const EducationHolder = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    text-align: left;
    width: 90%;
`
const CourseWorkBox = styled.div`
    display: grid;
    width: 90%;
    margin-top: 2%;
    grid-template-columns: 50%, 50%;
    grid-template-rows: auto;
    grid-template-areas:
        "a b"
`
const CourseWorkA = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 0.8rem;
    text-align: left;
    grid-area: "a";
`
const CourseWorkB = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 0.8rem;
    text-align: left;
    grid-area: "b";
`
const SchoolEducation = (props) =>{
    
    
    return(
        <EducationHolder>
            <TitleArea>
                <Company>
                    {props.School}
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
                    {props.Major}
                </InfoHeader>
                {/* <InfoSubHeader>
                    {props.FormerPosition}
                </InfoSubHeader> */}
                <InfoText style={{marginTop: "2%"}}>
                    {props.Description}
                </InfoText>
                <InfoText>
                    {props.Description2}
                </InfoText>
                <CourseWorkBox>
                    {props.RelevantCoursework!="" ? props.RelevantCoursework.map(text=>(
                        <CourseWorkA>
                            &nbsp;{text}&nbsp;
                        </CourseWorkA>
                        ))
                    : 
                        <div></div>}
                </CourseWorkBox>

            </InfoHolder>
        </EducationHolder>
    )
}
export default SchoolEducation;