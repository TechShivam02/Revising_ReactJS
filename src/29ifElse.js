
 //     Here creating Netflix and amazon different components  ,, .. 


 import NetFLx from './Netflix29.jsx';
 import AmazN from './Amazon29.jsx';
 
 
 
 const favseries='netflix';
 
 
 const FavS = () =>{
 
 
     if(favseries == 'netflix'){
                                 
         return(
             <NetFLx/>               // bcz outside the render   so thats why   <NetFLX> comp  inside the return()    
         );  
 
     } 
 
     
     
     else{
 
         return(
             <AmazN/>
         );  
 
     }
 
 }    

 export default FavS;

