import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import CustomFont from "./CustomFont"

const header = () =>{
    return(
    <CustomFont text="test value!">
        {console.log("test")}
    </CustomFont>
    )
}
export default header;