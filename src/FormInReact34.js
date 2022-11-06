import React,{useState} from "react";


const App = () => {



    const state = useState();



    const [text , setText] = useState("");

    const [t , saveText] = useState("");



    const InputFunc = (event) => {
    
        setText(event.target.value);

    }



    const showText = () => {
        
        saveText(text);
    }




    return (
        <>

        <div style={{backgroundColor : "black" , width:"100vw" , height : "100vh"}}>
            

            <h1 style={{color : "white"}}> Hello {t}</h1>

            <input type = "text" placeholder = "Enter your name"  onChange={InputFunc}></input> 

            <br/>

            <button  onClick={showText}> Click Me</button>


            
        </div>


        </>
    );


}

export default App;
