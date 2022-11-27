import React, { useEffect, useState } from "react";


const App = () => {


    const [num , setNum]  = useState(0);


    useEffect(() => {
        document.title = `You Click me ${num} Times .`
    })

    const Increment = () => {
        setNum(num+1);
    }


    return (
        <>
            <button onClick={Increment}> Click me {num} Times</button>
        </>
    )
}


export default App;