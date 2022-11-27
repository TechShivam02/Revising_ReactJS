import React, { useEffect, useState } from "react";

import axios from "axios";

const App = () => {

    const [num , setNum] = useState(5);

    const [name , setName] = useState("");

    const [move , setMoves] = useState(0);

    


    const SelectValue = (event) => {
        setNum(event.target.value);
    }


    const getData  = async () => {

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        
        console.log(res);
        console.log(res.data.name);


        setName(res.data.name);
        setMoves(res.data.moves.length);



    }

    useEffect (() =>{

        getData();
    })

     
    return (
        <>

            <h1> You Have    <span style={{color : "red"}}>   {num} Value .   </span> </h1>

                <h2> My Name is  <span style={{color : "red"}}> {name}  </span></h2>

                <h2>I Have <span style={{color : "red"}}> {move} Moves . </span> </h2>

        

           <select onChange = {SelectValue}>

                    <option val = "1">1 </option>
                    <option val = "25">25 </option>
                    <option val = "3">3 </option>
                    <option val = "4">4 </option>
                    <option val = "5">5 </option>
                        

           </select>

        </>
    )
}


export default App;

