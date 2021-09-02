import * as React from "react"

const CodeFont = (props) => {
    
    return(
        <div className="Text" style={props.style}>
            <strong>{props.text}</strong>
        </div>
    )
  };
  
  export default CodeFont;