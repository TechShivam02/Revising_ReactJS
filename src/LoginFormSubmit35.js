import React,{useState} from "react";


const App = () => {



    const state = useState();



    const [text , setText] = useState("");

    const [fname , saveText] = useState("");



    const[lname , setLname] = useState("");




    const InputFunc = (event) => {
    
        setText(event.target.value);

    }



    const InputFuncTwo = (event) => {
            setLname(event.target.value);
    }



    const showText = (event) => {
        
        event.preventDefault();
        saveText(text  + ' ' + lname);
    }




    return (
        <>

        <div style={{backgroundColor : "black" , width:"100vw" , height : "100vh"}}>
            


            <form onSubmit={showText}>
                
                <h1 style={{color : "white"}}> Hello {fname} </h1>

                <input type = "text" placeholder = "Enter your First name"  onChange={InputFunc}></input> 

                <br/>

                <input type = "text" placeholder = "Enter your Last name"  onChange={InputFuncTwo}></input> 

                <br/>


                <button  type="submit"> Click Me</button>

            </form>

        </div>


        </>
    );


}

export default App;
