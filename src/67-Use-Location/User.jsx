import React from "react";


import { useParams , useLocation } from "react-router-dom";




const ShowAlert = () => {
    alert("Shivam Bansal :  Premium User .");
}


const User = () => {

    const { fname , lname} = useParams();
    const location = useLocation();


    // console.log(location);

    console.log(location.pathname);

    
    return (
    
        <>

                <h1> User  -- {fname} {lname} --  Page .. </h1>
    <br/>

                <p> My Location is {location.pathname} </p>

    <br/>

                {location.pathname === "/user/shivam/bansal" ? ( <button onClick={ ShowAlert}> Click Me</button> ) : null}

        </>

    )
}



export default User;
