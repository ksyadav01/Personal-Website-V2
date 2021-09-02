import * as React from "react"

const CustomFont = (props) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div style={font}>
            {props.text}
        </div>
    )
  };
  
  export default CustomFont;