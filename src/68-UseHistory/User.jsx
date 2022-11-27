// UseHistory : gives you access to the history , that you may use to navigate ..

import React from "react";

import { useParams , useLocation , useHistory } from "react-router-dom";



const User = () => {

    const { fname , lname} = useParams();

    const location = useLocation();
    const history = useHistory();

    console.log(history);


    return (
    
        <>

                <h1> User  -- {fname} {lname} --  Page .. </h1>
    <br/>
                <p> My Location is {location.pathname} </p>

    <br/>
        
                {/* {location.pathname === "/user/shivam/bansal" ? ( <button onClick={ () => history.goBack() }> Go Back</button> ) : null}    */}


                {location.pathname === "/user/shivam/bansal" ? ( <button onClick={ () => history.push("/") }> Go To HomePage</button> ) : null}   


            {/*   onClick = {history.goBack()}   Wrong ...   , my mistake ,, {() => history.goBack() }   Or Do it with function  */}

        </>

    )
}



export default User;
