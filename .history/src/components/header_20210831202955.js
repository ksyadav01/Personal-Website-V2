import React, { useState, useEffect } from 'react';
import CustomFont from "./CustomFont"

const header = () =>{
    <CustomFont text="test value!">
        {console.log("test")}
    </CustomFont>
}
export default header;