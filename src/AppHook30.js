import React,{useState} from "react";


const App = () => {


    const state = useState();

    // console.log(state);

    const [count , setCount] = useState(0);


    const IncNum = () => {
        // console.log("Clicked : " + count++);
        setCount(count+1);
    }

    

    return(
        <>
            <h1> {count}</h1>
            <button onClick={IncNum} > Click </button>
        </>
    )

}


export default App;