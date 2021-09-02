import * as React from "react"

const CustomFont = (text) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div className="card" style={font}>
            {text}
        </div>
    )
  };
  
  export default CustomFont;