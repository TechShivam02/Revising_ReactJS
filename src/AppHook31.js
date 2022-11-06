import React,{useState} from "react";


const App = () => {



    const state = useState();


    
    let t = new Date().toLocaleTimeString();

    const [time , Updatetime] = useState(t);



    const getTime = () => {
        
       
        t = new Date().toLocaleTimeString();

        Updatetime(t);

    }



    return(
        <>
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time </button>
        </>
    )

}

export default App;
