import React,{useState} from "react";
import ReactDOM from "react";


const App =() => {

    const [num , setNum ] = useState(0);


    const IncNum =() => {

            setNum(num+1);
    }


    const DecNum =() => {


            setNum(num-1);

            if(num <= 0){
                setNum(0);
            }



    }


    

    return (

        <>
            <h1> {num} </h1>


            <button onClick={IncNum} > INCrement</button>
                
                {`      `}


            <button onClick={DecNum} > DECrement</button>
            
        </>
    )

}

export default App;

