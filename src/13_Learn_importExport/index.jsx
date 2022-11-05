import React from "react";
import ReactDOM from "react-dom";


import Piii from "./math.jsx";
import {hemlo , doublePi,triplePi} from "./math.jsx";


import * as obj from "./math";



// export default would be one , can be imported by any name smalll Or large Caps No Matters
// the named wale export , will be exported by {} seperated by comma  , and only be imaported using the same name  , by {} sep by comma.


// if want to imoprt default , and named in one line , use import * as obj .... , obj.default , obj.nameFunc() , obj.var ;    



ReactDOM.render(
  <>


 {/* <h1> {Piii} </h1> 

  <h2> {hemlo} </h2>
  <h2> {doublePi()} </h2>
  <h2> {triplePi()} </h2> */}

    
  {console.log(obj)}

  <h1> {obj.default} </h1>

  <h2> {obj.doublePi()} </h2>
  <h2> {obj.triplePi()} </h2>
  <h2> {obj.hemlo} </h2>
  
</>



 , document.getElementById("root")

)
