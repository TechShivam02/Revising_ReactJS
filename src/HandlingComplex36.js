import React, { useState } from "react";



const App = () => {

        
    const[fullName,setfullName] = useState( {
                  
            fname : "",
            lname : "",
     });


     
    const inputEvent = (event) => {        
          
        
            console.log(event.target.value);

            console.log(event.target.name);      // that descried in input  name=""  placeholder=""
            
                //  console.log(event.target.placeholder);   // that descried in input  name=""  placeholder=""


                    const output = event.target.value;
                    const name   = event.target.name;
                    

                    

            setfullName(    (event) => {

                                    // console.log(event);       //    event.previous.fname  gives fname      event.previous.lname   gives lname

                                if(name == "firstname" ){

                                    return{
                                        fname : output,                  // event.target.value
                                        lname : event.lname,
                                    
                                         }
                                         
                                  
                                }         // if closing 

                                
                                else if(name == "lastname" ){         // event.target.name

                                    return{
                                        fname : event.fname,    
                                        lname :   output,                // event.target.value
                                    
                                         };

                                }      // else if closing .. 

                            }
                    );


                        


    };

    

    
    const onsubmittts = (event) => {

            event.preventDefault();       //   the form will didn;t load on clicking submit btn

            
            alert("Your Data Has Been SubMitted");

        };





    return(
        <>

            <div>   


            <form   onSubmit={onsubmittts}>       



                <h1>  Hello {fullName.fname}  {fullName.lname}  </h1>        
                
    



                <input type="text"  placeholder="Enter Your First Name "   onChange={inputEvent}   
                // value={fullName.fname}
                name="firstname" 
                />

                <br/>


                <input type="text"  placeholder="Enter Your Last Name "   onChange={inputEvent} 
                // value={fullName.lname}
                name="lastname"
                />



                
                <br/> 
                <br/> 

               
                <button  type="submit"  > Click Me 👍</button>


        
        
        </form>



            </div>
        </>
    );


};


export default App;

