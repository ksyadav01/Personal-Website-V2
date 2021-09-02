import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"

const logo = {
    fontSize: "10rem",
    fontFamily: "Megrim",
}
const header = () =>{
    return(
    <LogoFont text="KYADAV" style={logo}/>
    )
}
export default header;