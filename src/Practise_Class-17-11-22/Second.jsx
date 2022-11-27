import React  from "react";

import HOC from "./HOC"

const Second = (props) => {
    
    return(
        <>
            
            <h1 onMouseOver={props.updateCount}>  Heading Hovered {props.value} Times</h1>

        </>
    )
}

export default HOC(Second);