import * as React from "react"

const CustomFont = () => {
    

    const font = {
        fontFamily: "Megrim",
    }
    return(
        <div className="card" style={font}>
            This is with Font Link. We are linking the fonts from the Google Fonts.
        </div>
    )
  };
  
  export default CustomFont;