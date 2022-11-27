import React,{createContext} from "react";


import CompA from "./CompA.jsx"


const FirstName = createContext();
const LastName = createContext();



const App = () => {
    return (

        <>
          
            <FirstName.Provider value = {"Shivam"}>

                    <LastName.Provider value={"Kumar"} >

                            <CompA/>

                    </LastName.Provider>

            </FirstName.Provider>


        </>

    )
}


export default App;

export {FirstName,LastName};

