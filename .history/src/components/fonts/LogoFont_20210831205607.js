import * as React from "react"

const LogoFont = (props) => {
    
    return(
        <div className="Logo" style={props.logo}>
            {props.text}
        </div>
    )
  };
  
  export default LogoFont;