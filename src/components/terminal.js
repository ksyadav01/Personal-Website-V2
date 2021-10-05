'use strict';
import React, { useState, useEffect } from 'react';
import Educations from "./educations.js";
import styled from 'styled-components';
import IvyScope from "../images/IvyScope.png";
import SBULogo from "../images/SBULogo.png";
import ShakerLogo from "../images/ShakerLogo.png";
import GCOM from "../images/GCOM.png";
import Terminal from './assets/TerminalPrompt.svg'
import { CSSTransition } from 'react-transition-group';
import 'mdbreact/dist/css/mdb.css';
import Header from "./header"
import ToTop from "./toTop"
import Home from "./home"
import Experience from "./experience"
import Education from "./education"
import Projects from "./project"
import Contact from "./contact"

const TerminalContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Terminals = () =>{
    const [showTerminal, setShowTerminal] = useState(true);
    const [showTermCounter, setShowTermCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowTermCounter(showTermCounter =>showTermCounter+0.5);
        }, 500);
        return () => clearInterval(interval);
        //if(showTermCounter > 7)
      }, []);


      
      return (
        <div>
        {showTermCounter<4.5 ? 
            <TerminalContainer>
                <Terminal style={{border: "1px", borderRadius: "10px", animation: "fadeInOut 5s"}}></Terminal>
            </TerminalContainer>
            : <div style={{animation: "fadeIn 1s"}}>
                
                <Header />
                <Home />
                <Experience />
                <Education />
                <Projects />
                <Contact />
                <ToTop/>
            </div> }
        </div>
      );
//     const [showTerminal, setShowTerminal] = useState(false);
//     const [showTerms, setShowTerms] = useState(true);
//     return (
//         <div style={{ paddingTop: '2rem' }}>
//         {showTerminal ?
//             <div>
//                 <Header />
//                 <Home />
//                 <Experience />
//                 <Education />
//                 <Projects />
//                 <Contact />
//             </div>
//         : 
//         <Terminal >

//         </Terminal>}
//         <CSSTransition
//             timeout={{enter: 10,exit: 10}}
//             transition
//             classNames="alert"
//             unmountOnExit
//             onEnter={() => setShowTerminal(false)}
//             onExited={() => setShowTerminal(true)}
//         >
//             <Terminal >

//             </Terminal>
//         </CSSTransition>
//         </div>
//   );
};
// const TerminalHolder = styled.div`
//     width: 100%;
//     background-color: #082032;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
//     padding-top: 8%;
//     padding-bottom: 8%; 
//     box-sizing: border-box;
//     z-index: 5;
//     //margin-bottom: 16%;
//     x-sizing: border-box;
// `
// const Terminals = () =>{
//     return(
//         <TerminalHolder>
//         </TerminalHolder>
//     )
// }
export default Terminals;