import React from "react";
import ReactDOM from "react-dom";


import Sdata from './Sdata.jsx';
import Card from "./23-props/Card";



function nCard(val){

  console.log(val);

  return(

    <Card    
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

    {/* {Sdata.map(nCard)} */}   {/*  nCard   function Name */}



    {/* {
      Sdata.map(function nCard(val){
     
       return(
                <Card    
                    imgSrc={val.imgSrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}  
                />
            )
    })
    
    } */}




    {Sdata.map((val , index)  => {

      console.log(index);
      
      return(
                <Card    
                    imgSrc={val.imgSrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}  
                />
            )
    })}





    </>

 , document.getElementById("root")

)
