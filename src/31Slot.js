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

        <h1>  ð° welcome to the <span> Slot Machine game </span> ð°</h1>


        <Slot   x = 'ð'   y = 'ð'  z =  'ð' />

        <br/>
        

        <Slot   x = 'ð'   y = 'ð'  z =  'ð'  />
        <br/>

        <Slot   x = 'ð'   y = 'ðŪâðĻ'  z = 'ðĪ'  />

        <br/>
        



        <Slot   x = 'ðĩâðŦ'   y = 'ðĪŠ'  z =  'ð'  />
        <br/>
        
        <Slot   x = 'ð'   y = 'ð'  z =  'ð'  />
        <br/>
        
        
        <Slot   x = 'ð'  y = 'ð'  z =  'ð'  />
        <br/>
        
        </>

    );


}







export default  App ;




