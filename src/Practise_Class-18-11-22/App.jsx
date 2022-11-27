import React, { useState , useEffect } from "react";

/*

    If we do not pass an array inside useEffect hook , then it will be called everytime a state is changed , irrespective of what the state is.

    If we pass an empty array inside UseEffect hook then useEffeet will not be called , no matter which state is changing 

    If we pass a particular state inside array , then useEffect will only get called when that particular state changes.
    

*/


const App = () => {

    const [count, setcount] = useState(0);
    const [group, setGroup] = useState("UnKnown");
    

    useEffect ( ()=>{
        console.log("Thanks For Visiting ");
    }  )



    const handleClick = ()=> {
        setcount(count+1);
    }

    const Clicked = ()=> {
        setGroup("Group 12");
    }

    




    return(
        <>

        <h2 onMouseOver={handleClick}> Heading Hovered {count} Times</h2>

        <h3 onClick={Clicked}> My Group is : {group} </h3>


        </>
    )
}

export default App;
