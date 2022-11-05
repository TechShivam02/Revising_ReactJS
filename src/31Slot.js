import React from 'react';


const Slot =(props) => {

    let x =props.x;
    let y =props.y;
    let z =props.z;
    
        

    if(x==y && y==z){
        return(
             <>
            
                    <div>
                                <h1> {x}{y}{z} <br/> "This is Matching ..."  </h1>
                    </div>
             </>
        )
    }


    else{


        return(
            
            <>
                    <div>
                                        <h1> {x}{y}{z} <br/> "This is NOT Matching ..."  </h1>
                    </div>

            </>
       )


    }
}




const App = () => {

    return (


        <>

        <h1>  🎰 welcome to the <span> Slot Machine game </span> 🎰</h1>


        <Slot   x = '🙂'   y = '🙂'  z =  '🙂' />

        <br/>
        

        <Slot   x = '🙂'   y = '🙂'  z =  '🎅'  />
        <br/>

        <Slot   x = '🙂'   y = '😮‍💨'  z = '🤕'  />

        <br/>
        



        <Slot   x = '😵‍💫'   y = '🤪'  z =  '😄'  />
        <br/>
        
        <Slot   x = '🍎'   y = '🍎'  z =  '🍎'  />
        <br/>
        
        
        <Slot   x = '🍎'  y = '🍌'  z =  '🍏'  />
        <br/>
        
        </>

    );


}







export default  App ;




