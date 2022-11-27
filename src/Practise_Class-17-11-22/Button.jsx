import React from "react";
import HOC from "./HOC"


const Button = (props) => {

    return(
        <>

        
            <button onClick={props.updateCount}>Button Clicked {props.value} Times</button>


        </>
    )
}

export default HOC(Button);
