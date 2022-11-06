import React,{useState} from "react";


const App = () => {


    const state = useState();

    let t = new Date().toLocaleTimeString();
    const [ctime , Updatetime] = useState(t);


   const CallFunc = () => {

    t = new Date().toLocaleTimeString();
    Updatetime(t);

   }


   setInterval(CallFunc , 1000);


    return (
        <h1>
            {ctime}
        </h1>
    );
}




export default App;
