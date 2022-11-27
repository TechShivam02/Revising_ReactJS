import React,{useState} from "react";

const App = () => {

    const [fullName , setFullName] = useState({
        
        fname : "",
        lname : "",

        email : "",
        phone : "",

    })



    const inputEvent = (event) => {
        

        const name = event.target.name;
        const output =event.target.value;


        setFullName( (event) => {

                console.log(event);


                return{
                    ...fullName,

                    [name] : output,
                }
        })


    }

    const onsubmittts = () => {
        alert("Your Data is SuccessFully Submitted ..");
    }




    return (

        <>


        <form   onSubmit={onsubmittts}>  
        
        
                    <h1> 
                        
                        Hello :  
                     
                        {` `+ fullName.fname}  {fullName.lname} 
                    
                    </h1>

                
                        <p> Email :  {fullName.email}  </p>
                        

                        <p> Phn.No : {fullName.phone}  </p>



                    <h3>Qualification : {fullName.qual}</h3>


                <input name = "fname"  type= "text" autoComplete="off"   onChange = {inputEvent} placeholder = "Enter your first name " />

<br/>
<br/>
                        
                <input name = "lname"  type= "text" autoComplete="off"   onChange = {inputEvent} placeholder = "Enter your Last name " />

<br/>
<br/>
        

                <input name = "email"  type= "email" autoComplete="off"   onChange = {inputEvent} placeholder = "Enter your Email " />
<br/>
<br/>
        

                <input name = "phone"  type= "number" autoComplete="off"   onChange = {inputEvent} placeholder = "Enter your Phone Number " />

<br/>
<br/>


                <button  type="submit"  > Click Me 👍</button>
        

        </form>


        </>
    )
}


export default App;
