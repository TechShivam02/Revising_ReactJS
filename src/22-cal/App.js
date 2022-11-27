import React from "react";
import {add , sub , div , mul} from "./calc.jsx";


function App(){

    return(
      <>

          <ul>
          
            <li>Sum of two num is {add(40,2)} </li>
            <li>Sub of two num is {sub(40,2)} </li>
            <li>Div of two num is {div(40,7)} </li>
            <li>Mul of two num is {mul(40,2)} </li>
            
          </ul>

      </>
    );

}

export default App;
