import * as React from "react"

const LogoFont = (props) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div className="card" style={props.logo}>
            {props.text}
        </div>
    )
  };
  
  export default LogoFont;