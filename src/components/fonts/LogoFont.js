import * as React from "react"

const LogoFont = (props) => {
    
    return(
        <div className="Logo" style={props.style}>
            <strong>{props.text}</strong>
        </div>
    )
  };
  
  export default LogoFont;