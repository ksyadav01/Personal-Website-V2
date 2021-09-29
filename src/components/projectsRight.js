import React from 'react';
import styled from 'styled-components';


const ProjectHolder = styled.div`
    width: 100%;
    background-color: #082032;
    display: grid;
    grid-template-columns: 45% 10% 20% 20% 5%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-template-areas:
        "a b c d e"
        "a1 b1 c1 d1 e1"
        "a2 b2 c2 d2 e2"
        "a3 b3 c3 d3 e3"
        "a4 b4 c4 d4 e4"
        "a5 b5 c5 d5 e5"
        "a6 b6 c6 d6 e6"
        "a7 b7 c7 d7 e7"
        "a8 b8 c8 d8 e8"
        "a9 b9 c9 d9 e9";
        //"a10 b10 c10 d10 e10";
    padding-top: 6%;
    padding-bottom: 6%;
`
const ProjectImageHolder = styled.div`
    grid-column-start: a;
    grid-column-end: b;
    grid-row-start: a;
    grid-row-end: a9;
`
const ProjectImage = styled.img`
    width: 100%;
    border: 1px;
    border-radius: 5px;
`
const ProjectFeatured = styled.div`
    grid-column-start: c;
    grid-column-end: d;
    grid-row-start: a;
    grid-row-end: a1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;

    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1rem;
    text-align: right;

`
const ProjectTitle = styled.div`
    grid-column-start: c;
    grid-column-end: d;
    grid-row-start: a1;
    grid-row-end: a2;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    color: #FF4C29;
    font-family: Space Mono;
    font-size: 3rem;
    text-align: right;

`
const ProjectMiniDesc = styled.div`
    grid-column-start: c;
    grid-column-end: d;
    grid-row-start: a3;
    grid-row-end: a4;
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;

    color: white;
    font-family: Space Mono;
    font-size: 1.25rem;
    text-align: right;

`
const ProjectInfoText = styled.div`
    text-align: right;
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
    border-bottom: 1.1px solid white;
    transition: 0.25s ease;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2%;
`
const ProjectInfoBody = styled.div`
    text-align: right;
    color: white;
    font-family: Space Mono;
    font-size: ${props => props.FontSize};
    transition: 0.25s ease;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 3%;
    
`
const ProjectInfoBox = styled.div`
    grid-column-start: b;
    grid-column-end: d;
    grid-row-start: a5;
    grid-row-end: a7;
    background-color: #bc2302;
    
    //filter: grayscale(40%);
    border: 1px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    z-index: 2;
    align-items: flex-end;
    justify-content: flex-start;
    transition: box-shadow .3s;
    transition: filter 0.3s ease-in-out;
    flex-direction: column;
    display: flex;
    &:hover{
        box-shadow: 1px 3px 5px 2px #2C394B;
        

        filter: saturate(60%);
    }
    &:hover ${ProjectInfoText}{
        
        transition-duration: .2s;
        transform: translateY(-6px);
    }
    &:after ${ProjectInfoText}{
        transition: 0.25s ease;
    }
    
    &:hover ${ProjectInfoBody}{
        
        transition-duration: .2s;
        transform: translateY(-3px);
    }
    &:after ${ProjectInfoBody}{
        transition: 0.25s ease;
    }

`
const GithubLinkHolder = styled.div`
    grid-column-start: e;
    grid-column-end: e;
    grid-row-start: a5;
    grid-row-end: a7;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`
const GithubLink = styled.a`
    color: white;
    font-family: Space Mono;
    font-size: 0.8rem;
    transition: 0.25s ease;
    &:hover {
        transition-duration: .2s;
        transform: translateX(5px);
        color: #FF4C29;
    }
    &:after {
        transition: 0.25s ease;
    }

`
const ProjectTechnologyBox = styled.div`
    
    grid-column-start: c;
    grid-column-end: d;
    grid-row-start: a8;
    grid-row-end: a9;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`
const ProjectTechnologyHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex:1;
    width: 100%;
    height: 100%;
`
const ProjectLanguageHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    flex: 1;
    width: 100%;
    height: 100%;
`
const ProjectTechnology = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 0.8rem;
    text-align: right;
`

const ProjectRight = (props) =>{
    
    return(
        <ProjectHolder>
            <ProjectImageHolder>
                <ProjectImage src={props.PingProject}>
                
                </ProjectImage>
            </ProjectImageHolder>
                {props.Featured 
                    ? 
                        <ProjectFeatured>
                            FEATURED PROJECT
                        </ProjectFeatured>
                    : 
                        <div></div>}
                <ProjectTitle>
                    {props.Title}
                </ProjectTitle>
                <ProjectMiniDesc>
                    {props.MiniDescription}
                </ProjectMiniDesc>
            <ProjectInfoBox>
                <ProjectInfoBody FontSize={props.FontSize}>
                    {props.BodyText}
                </ProjectInfoBody>
            </ProjectInfoBox>
            <GithubLinkHolder>
                <GithubLink href={props.GitHub}>G I T H U B</GithubLink>
            </GithubLinkHolder>

            <ProjectTechnologyBox>
                <ProjectTechnologyHolder>
                    {props.Technologies.map(text=>(
                        text="|" ? 
                            <ProjectTechnology>
                                &nbsp;{text}&nbsp;
                            </ProjectTechnology>
                            :
                            <ProjectTechnology>
                                {text}
                            </ProjectTechnology>
                    ))}
                </ProjectTechnologyHolder>
                <ProjectLanguageHolder>
                    {props.Languages.map(text=>(
                        text="|" ? 
                        <ProjectTechnology>
                            &nbsp;{text}&nbsp;
                        </ProjectTechnology>
                        :
                        <ProjectTechnology>
                            {text}
                        </ProjectTechnology>
                ))}
                </ProjectLanguageHolder>

            </ProjectTechnologyBox>
        </ProjectHolder>
    )
}
export default ProjectRight;