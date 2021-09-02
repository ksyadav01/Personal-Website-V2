import * as React from "react"

const CodeFont = (props) => {
    
    return(
        <div className="Text" style={props.style}>
            {props.text}
        </div>
    )
  };
  
  export default CodeFont;