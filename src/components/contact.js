'use strict';
import React, { useState, useEffect } from 'react';
import Educations from "./educations.js";
import styled from 'styled-components';
import IvyScope from "../images/IvyScope.png";
import SBULogo from "../images/SBULogo.png";
import ShakerLogo from "../images/ShakerLogo.png";
import GCOM from "../images/GCOM.png";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


const ContactContainer = styled.div`
    width: 100%;
    background-color: #082032;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 1%;
    padding-bottom: 8%;
    box-sizing: border-box;
    z-index: 5;
`
const ContactTitle = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 3rem;
`
const ContactSubtitle = styled.div`
    color: #FF4C29;
    font-family: Space Mono;
    font-size: 1.5rem;
`
const ContactBox = styled.div`
    width: 70%;
    display: flex;
    background-color: #bc2302;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px;
    border-radius: 10px;
    margin-top: 5%;

`
const ContactSquareHolder = styled.div` 
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;
    margin-top: 5%;
    margin-bottom: 5%;
`
const ContactLinkedIn = styled.div`   
    width: 40%;
    display: flex;
    background-color: #bc2302;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const EmailHolder = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px;
    border-radius: 25px;
`
const EmailImage = styled.img`
    width: 80%;
`
const LinkedInImage = styled.img` 
    width: 50%;
    background-color: white;
    border: 1px;
    border-radius: 25px;
`
const ContactMainText = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1.25rem;
    font-weight: 600;
`
const ContactSubText = styled.div`
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
`
const ContactSubTextLink = styled.a`
    color: white;
    font-family: Space Mono;
    font-size: 1rem;
    text-decoration: underline;
`

const Contact = () =>{
    return(
        <ContactContainer id="contact">
           <ContactTitle>
               C O N T A C T
           </ContactTitle>
           <ContactSubtitle>
               I'd love to get in touch
           </ContactSubtitle>

           <ContactBox>
                <ContactSquareHolder>
                    <ContactLinkedIn>
                        <EmailHolder>
                            <EmailImage src="https://img.icons8.com/ios-filled/300/000000/new-post.png"/>
                        </EmailHolder>
                        <ContactMainText>
                            Email me at
                        </ContactMainText>
                        <ContactSubText>
                            ksyadav01@outlook.com
                        </ContactSubText>
                    </ContactLinkedIn>
                    <ContactLinkedIn>
                        <LinkedInImage src="https://img.icons8.com/ios-glyphs/300/000000/iphone.png"/>
                        <ContactMainText>
                            Reach me at
                        </ContactMainText>
                        <ContactSubText>
                            (518)-334-5038)
                        </ContactSubText>
                    </ContactLinkedIn>
                    <ContactLinkedIn>
                        <LinkedInImage src="https://img.icons8.com/ios-glyphs/300/000000/linkedin.png"/>
                        <ContactMainText>
                            Connect with me
                        </ContactMainText>
                        <ContactSubTextLink href="https://www.linkedin.com/in/karansyadav/">
                            On LinkedIn
                        </ContactSubTextLink>
                    </ContactLinkedIn>
                </ContactSquareHolder>
            

                {
                /* 
                <MDBContainer className="md-form" style={{width: "50%", backgroundColor:"#bc2302",border: "1px solid white",
                     display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center"}}>
                    
                        <form style={{width: "200%", border: "1px solid black",}}>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div style={{display: "flex", border: "1px solid white",
                            flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                            {/* <input className="md-form" placeholder="Your name"  type="text"  error="wrong"
                                success="right" required style={{color: "white", width: "200%"}}/> 
                                <div style={{flex: 1}}>
                                    <label style={{fontSize: "0.75rem", color: "white"}}>Your name
                                        <input className="md-forms" type="text" onChange={()=>console.log("works?")}/>
                                    </label>
                                </div>
                                
                                <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                                    <label for="a" style={{fontSize: "0.75rem", color: "white", position: "absolute"}}>jnasd adsbjkad dsa kj
                                        </label>
                                    <input id="a" className="md-forms" type="number" />
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                                    <label for="b" style={{fontSize: "0.75rem", color: "white", position: "absolute"}}>jnasd adsbjkad dsa kj
                                        </label>
                                    <input id="b" className="md-forms" type="number" />
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center", verticalAlign:"middle"}}>
                                    <label for="d" style={{fontSize: "0.75rem", color: "white", position: "absolute", top: "0"}}>jnasd adsbjkad dsa kj
                                        </label>
                                    <input id="d" className="md-forms" type="number" />
                                </div>
                                <input className="md-form"  placeholder="Your email (optional)" type="email" validate error="wrong"
                                    success="right" />
                                <input className="md-form"  placeholder="What would you like to tell me?"  
                                    group type="textarea" validate error="wrong" success="right" />
                            </div>
                            <div className="text-center">
                            <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                </MDBContainer> 
                */
                }

           </ContactBox>

        </ContactContainer>
    )
}
export default Contact;