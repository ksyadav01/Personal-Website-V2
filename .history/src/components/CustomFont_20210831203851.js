import * as React from "react"

const CustomFont = (props) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div className="card" style={font}>
            {props.text}
        </div>
    )
  };
  
  export default CustomFont;