import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';


import App from "./69-Live_Search_Filter/App"

                                    
ReactDom.render( 

    <BrowserRouter>

        <App/>
    </BrowserRouter>

    
    ,
    document.getElementById("root")
);


export default App;
