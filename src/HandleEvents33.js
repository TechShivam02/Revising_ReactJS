import React , {useState} from "react";



const App = () => {



    const btnText = "Click ME";
    const state = useState();




    let clr = "purple";
    let dtext = "Click ME";
    


    const [color , setColor] = useState(clr);
    
    const [text , setText] = useState(dtext);
    




    const singleClick = () => {

        let changeclr = "yellow";
        setColor(changeclr);
        
        setText("Ouuch 😁");



    }

    const dblClick = () => {

        let changeclr = "orange";
        setColor(changeclr);

        setText("Aeyoo 😤");

        
    }

    

    return (
    

    <div style={{backgroundColor : color , width:"100vw" , height:"100vh" }}>
      <button onClick = {singleClick}  onDoubleClick = {dblClick} style = {{width : "200px" , height : "50px" , }}> {text} </button>
    </div>

    )

}


export default App;


