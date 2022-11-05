import React from "react";
import ReactDOM from "react-dom";


import Sdata from './Sdata.jsx';
import Card from "./23-props/Card";



ReactDOM.render(
  
    <>


      <Card
        
        imgSrc={Sdata[0].imgSrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}  
      />



    <Card
      
      imgSrc={Sdata[1].imgSrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}  
    />


    <Card
      
      imgSrc={Sdata[2].imgSrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}  
    />

  
  <Card
      
      imgSrc={Sdata[3].imgSrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}  
    />



<Card
      
      imgSrc={Sdata[4].imgSrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}  
    />






    

    </>

 , document.getElementById("root")

)
