import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";



/*

    
        reduccer(state , action);
        const [state, dispatch] = useReducer(reducer , current , method , state);


            dispatch =  action trigger   , type pass , what action to perform   ,  state = any name 

*/

/*

    To match more states in big projects

*/



const App = () => {

        const reducer = (state , action) =>{

                if(action.type === 'Increase'){
                    return state+1;
                }

                else if(action.type === 'Decrease'){
                    return state-1;
                }

        }


        const [state , dispatch] = useReducer(reducer , 0);



    


    return(
        <>

        
            <button onClick={ () => dispatch({
                type : 'Increase'
            })}> + </button>

            <h2>Count : {state} </h2>

            
            <button onClick={ () => dispatch({
                type : 'Decrease'
            })}> - </button>


        </>
    )
}

export default App;
