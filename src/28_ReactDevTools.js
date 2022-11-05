import React from "react";
import ReactDOM from "react-dom";


import Sdata from './Sdata.jsx';
import Card from "./23-props/Card";



function nCard(val){

  

  return(

    <Card  

     key = {val.id}

        imgSrc={val.imgSrc}
        title={val.title}
        sname={val.sname}
        link={val.link}  
    />
  )
}


   

ReactDOM.render(
  
    <>


{/* The Array.map() method creates a new array from the results of calling a function for every element. */}


    {Sdata.map(nCard)}


    </>

 , document.getElementById("root")

)
