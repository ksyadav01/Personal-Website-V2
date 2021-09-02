import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"

const logo = {
    fontSize: "1rem",
    fontFamily: "Megrim",
}
const header = () =>{
    return(
    <LogoFont text="KYADAV" logo={logo}/>
    )
}
export default header;