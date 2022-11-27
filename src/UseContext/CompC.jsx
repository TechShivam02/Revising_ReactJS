import React, { useContext } from "react";

import  {FirstName,LastName} from "./App.jsx";


const CompC =() => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    
    return (
       
        <h1> Hello , My Name : {fname} {lname} </h1>
        
    )
}

export default CompC;

