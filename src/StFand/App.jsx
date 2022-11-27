import React, { useReducer } from "react";






const App = () => {

        const reducer = (state , action) =>{

                if(action.type === 'inc'){
                    return state+1;
                }

                else if(action.type === 'dec'){
                    return state-1;
                }

        }


        const [state , dispatch] = useReducer(reducer , 0);



    


    return(
        <>

        
            <button onClick={ () => dispatch({
                type : 'inc'
            })}> + </button>

            <h2>Count : {state} </h2>

            
            <button onClick={ () => dispatch({
                type : 'dec'
            })}> - </button>


        </>
    )
}

export default App;
