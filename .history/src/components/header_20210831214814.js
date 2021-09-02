import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"

const logo = {
    fontSize: "1 rem",
    fontFamily: "Megrim",
}
const headerContainer = {
    width: "100%",
    height: "5rem",
    backgroundColor: "black",
    margin: 0,
    padding: 0
}
const header = () =>{
    return(
        <div style={headerContainer}>
            <LogoFont text="KYADAV" logo={logo}/>
        </div>
    )
}
export default header;