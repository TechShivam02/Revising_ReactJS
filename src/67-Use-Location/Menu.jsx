import React from "react";

import {NavLink} from "react-router-dom";


import "./index.css";




const Menu = () => {


        return(
                <>

                 

                <div style={{display : "flex"  ,  flexDirection : "row" , justifyContent : "space-around" }}> 
                        

                            <NavLink exact activeClassName = "active" to="/">  About Us</NavLink>

                            <NavLink exact activeClassName = "active" to="/service"> Services</NavLink>  

                            <NavLink exact activeClassName = "active" to="/user/shivam/bansal"> User</NavLink>   {/* By default , rediect To   shivam/bansal    , which will be caught by useParams   fname = shivam   lname  = bansal   */} 

                            <NavLink exact activeClassName = "active" to="/contact"> Contact Us</NavLink>  

                            

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                            

                 
                </div>           

                    
                </>

        );
}


export default Menu;
