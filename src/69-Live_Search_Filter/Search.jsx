import React , {useState} from "react";

import "./index.css";

import Sresult from "./Sresult";


const Search =() => {


    const[searchdata , setSearchdata] = useState("");


    const InputEvent = (event) => {
        
        const data = event.target.value;
        setSearchdata(data);

    }

    return(

        <>

                <div className="searchbar">
                    <input type="text" onChange = {InputEvent} placeholder="Search Anything " /> 
                </div>


                {searchdata === "" ? null : <Sresult name={searchdata} />}
                


        </>
    );
}

export default Search;



