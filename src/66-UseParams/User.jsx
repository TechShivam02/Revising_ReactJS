import React from "react";


import { useParams } from "react-router-dom";


/*
    UseParams : useParams return a key/value pairs of URL Parameters , Use it to access match.params of the current <Route>
*/




/*

        const User = ({match}) => {
            return (
                <>
                    <h1> User  -- {match.params.fname} --  Page .. </h1>

                </>
            )
        }

*/


const User = () => {

    const { fname , lname} = useParams();    // parameter name should be same , As in Route    // bcz   if u try for  lname ,fname      then fname = always fname , lname me lname always 
  
    return  <h1> User  -- {fname} {lname} --  Page .. </h1>

}



export default User;
