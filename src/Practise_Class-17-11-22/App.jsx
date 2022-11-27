import React, { useState } from "react";

import First from "./First";
import Second from "./Second";

import Button from "./Button";


const App = () => {


    
/*
    Higher Order Comp : are those comp thay takes a componenet as an argument and then wrap that component
    to pass the proerties of HO through PROPS .

    It has a wrapping component in which we define all the methods and it has one Wrapped Compoennr in which we pass 
    these methods as attributes (to be used as props).
*/




    return(
        <>

        
        <First/>

            <Button/>

        <Second />



        </>
    )
}

export default App;
