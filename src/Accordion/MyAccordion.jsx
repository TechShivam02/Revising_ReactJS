import React, { useState } from "react";



const MyAccordion =(props) => {

                   
    const[show,setShow] = useState(false);
     

    const ShowHideAns =() =>{
        setShow(!show);
    }




        return(

            <>       

                                    {/* Line 23  in Accordion.jsx     ,,,,,         When     id ,  ques ,  ans      send  in props */}

                   {/* <h3> Id : {props.i} </h3>
                   

                   <h4> Ques : {props.ques} </h4>
                   <h4> Answer : {props.ans} </h4> */}







                                {/*  When object passed in props  */}

                   {/* <h3> Id : {props.obj.id} </h3> */}


                   
                   <h4> Ques : {props.obj.question} </h4>
                   <button   onClick={ShowHideAns} >    { show ?  "➖" :  "➕"  } </button>    

                                                    {/*   When click on   data shown , the button will toggled  */}


                   {
                          show ?    <p> Answer : {props.obj.answer} </p>    : <p/>
                   } 


                   {/*   If show is true , then  show para tag  with data written inside  , else <p> empty para  */}
                                
                                



                   <br/>

            </>

        );


}


export default MyAccordion;

