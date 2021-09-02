import React, { useState, useEffect } from 'react';
import CustomFont from "./CustomFont"

const header = () =>{
    <div>
    <CustomFont text="test value!">
        {console.log("test")}
    </CustomFont>
    test
    </div>
}
export default header;