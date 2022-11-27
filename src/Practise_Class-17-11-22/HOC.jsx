import React , {useState} from "react";

const HOC = (WrappedComponent) => {


        const Wrapper = () => {
        
            let [count,setCount] = useState(0);
        
            const handleClick = () => {
                setCount(count+1);
            }
    
            return(

                <WrappedComponent updateCount={handleClick}  value={count}/>    
            
                )

        }



    return (Wrapper);

    
}

export default HOC;




// import React , {useState} from "react";

// const HOC = (wrappedComp) => {


    
//         const [count,setCount] = useState(0);

//         const handleClick = () => {
//             setCount(count+1);
//         }




//     return(

//         <wrappedComp updateCount={handleClick}  value={count}/>

//     )
// }

// export default HOC;