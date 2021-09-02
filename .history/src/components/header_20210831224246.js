import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"

const logo = {
    fontSize: "1.5rem",
    fontFamily: "Megrim",
    color: "white",
    textShadow: "2px 2px grey",
    
}
const headerContainer = {
    width: "100%",
    height: "5rem",
    backgroundColor: "#151515",
    display: "flex",
    flex: 1,
    justifyContent: "center",
}
const header = () =>{
    return(
        <div style={headerContainer}>
            <LogoFont text="KYADAV" logo={logo}/>
        </div>
    )
}
export default header;