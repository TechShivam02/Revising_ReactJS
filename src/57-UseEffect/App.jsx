import React, { useEffect, useState } from "react";

const App  = () => {

    const [num,setNum] = useState(0);

    const [num1,setNum1] = useState(0);

    


    useEffect( () => {
        alert("I am Clicked");
    } , [num])                                    // None     []  - only once , first renders    [num] : works for only num



    const Increment = () => {
        
        setNum(num+1);

    }


    const Increment1 = () => {        
        setNum1(num1+1);

    }



    return (
        <>
        
                <button onClick={Increment}> Click me {num} Times </button>

                <br/>
                <br/>

                
                <button onClick={Increment1}> Click me {num1} Times </button>


           
        </>
    )
}

export default App;

