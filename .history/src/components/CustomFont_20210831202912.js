import * as React from "react"

const CustomFont = (text) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div style={font}>
            {text}
        </div>
    )
  };
  
  export default CustomFont;