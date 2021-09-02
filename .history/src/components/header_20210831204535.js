import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import LogoFont from "./fonts/LogoFont"

const header = () =>{
    return(
    <LogoFont text="test value!">
        {console.log("test")}
    </LogoFont>
    )
}
export default header;