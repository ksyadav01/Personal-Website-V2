import * as React from "react"

const LogoFont = (props) => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div className="card" style={font}>
            {props.text}
        </div>
    )
  };
  
  export default LogoFont;