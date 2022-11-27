import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';


import App from "./68-UseHistory/App"

                                    
ReactDom.render( 

    <BrowserRouter>

        <App/>
    </BrowserRouter>

    
    ,
    document.getElementById("root")
);


export default App;
