import React, { useState } from "react";



const App = () => {

        
    const[fullName,setfullName] = useState({
        
        fname : "",
        lname : "",

        email:"",
        phone:"",
    
    });



    

    
    const inputEvent = (event) => {        
          
            console.log(event.target.value);

            console.log(event.target.name);      // that descried in input  name=""  placeholder=""
            
                //  console.log(event.target.placeholder);   // that descried in input  name=""  placeholder=""

            




                    const output = event.target.value;
                    const name = event.target.name;
                    
            


            setfullName(    (event) => {

                                    // console.log(event);       //    event.previous.fname  gives fname      event.previous.lname   gives lname

                                if(name == "firstname" ){

                                    return{
                                        
                                        fname : output,
                                        lname : event.lname,
                                        email:  event.email,
                                        phone:  event.phone,

                                    
                                         }

                                  
                                }         // if closing 



                                
                                else if(name == "lastname" ){

                                    return{

                                        fname : event.fname,
                                        lname : output,
                                        email:  event.email,
                                        phone:  event.phone,
                                    
                                         };

                                }      // else if closing .. 



                                else if(name == "emailname" ){

                                    return{
                                       
                                        fname : event.fname,
                                        lname : event.lname,
                                        email:  output,
                                        phone:  event.phone,
                                    
                                         };

                                }      // else if closing .. 



                                else if(name == "phonename" ){

                                    return{
                                       
                                        fname : event.fname,
                                        lname : event.lname,
                                        email:  event.email,
                                        phone:  output,
                                    
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



                    <h1> 
                    
                     Hello : {fullName.fname}  {fullName.lname}  
                    
                    </h1>


                        
                        
                        <p> {fullName.email}  </p>
                        



                        
                        <p> {fullName.phone}  </p>
                       
                         
                
    
 

                <input type="text"  placeholder="Enter Your First Name "   onChange={inputEvent}   
                // value={fullName.fname}
                name="firstname" 

                autoComplete="off"
                />



                <br/>



                <input type="text"  placeholder="Enter Your Last Name "   onChange={inputEvent} 
                // value={fullName.lname}
                name="lastname"

                
                autoComplete="off"
                />





                <br/>
                <br/>



                <input type="email"  placeholder="Enter Your Email "   onChange={inputEvent} 
                // value={fullName.lname}
                name="emailname"

                
                autoComplete="off"
                />



                <br/>



                <input type="number"  placeholder="Enter Your Phn:Num "   onChange={inputEvent} 
                // value={fullName.lname}
                name="phonename"

                
                autoComplete="off"
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

