import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';


import App from "./67-Use-Location/App"

                                    
ReactDom.render( 

    <BrowserRouter>

        <App/>
    </BrowserRouter>

    
    ,
    document.getElementById("root")
);


export default App;
