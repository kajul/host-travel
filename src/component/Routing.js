import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
const Routing = ()=>{

    return(
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Aboutus" component={Aboutus} />
                        
                </BrowserRouter>
                </React.Fragment>

    
    
    )}