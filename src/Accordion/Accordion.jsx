import React, { useState } from "react";
import {questions} from "./api.js"
import MyAccordion from "./MyAccordion.jsx"


const Accordion = () => {


    const[data,setData] = useState(questions);

    
    return(

        <>
               {/* <h1> Hemlo</h1> */}


                {

                    data.map( (object , index) => {                   // currElement   index  currarray  this    
                           
                            {/* console.log(obj); */}

                            {/* return  <MyAccordion  key={index}   i={index}  ques = {obj.question}    ans = {obj.answer}  />  */}

                            return  <MyAccordion  key={index}  obj = {object}  /> 

                    })
                }


        </>

    );
}


export default Accordion;

