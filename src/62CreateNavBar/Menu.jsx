import React from "react";

import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";


const Menu = () => {
    return(
        <>



            <NavLink  exact activeClassName="active" to="/">About Page </NavLink>
            <NavLink  exacct activeClassName="active" to="/contact">Contact Page </NavLink>


            {/* <Link to="/">About Page </Link>
            <Link to="/contact">Contact Page </Link> */}

{/*             
           <a href="/">About Page</a>

           <a href="/contact">Contact Page</a> */}

           

        </>
    )
}


export default Menu;

