import React from "react";

import { Route , Switch} from "react-router-dom";

import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Name from "./Name.jsx";
import Service from "./Service.jsx";
import User from "./User.jsx";



import ErrorPage from "./ErrorPage.jsx"



import Menu from "./Menu.jsx"




const App =() => {

    return(

        <>

                     
                <Menu/>

        <Switch>    
               
              
                    <Route exact path="/"  component ={About}/>    
                    <Route exact path="/service"  component ={Service}/>    
                     
                   <Route exact path="/contact" component ={Contact} />  
                   <Route path="/contact/name" component ={Name}/> 


                   <Route  path="/user/:fname/:lname" component ={User} />    
                   
                   
                <Route component ={ErrorPage} /> 
            

            
        </Switch>




      
      
           

        </>
    );
}

export default App;




// npm install --save react-router-dom

