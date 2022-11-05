import React from 'react';


import NetFLx from './Netflix29.jsx';
import AmazN from './Amazon29.jsx';

const favseries='netflix';


function App(val){    
    
    return (

                <>
                    
                <h1 className='heading_style'> List of Top 5 Netflix Series in 2020</h1>                        

                 {/* <FavS/>  */}

                {  favseries == 'netflix'  ?  <NetFLx/>  :  <AmazN/>   }


               </> 

        );

}    // function App()   ,,  closed  ...... 




export default App;

