import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { exportDefaultDeclaration } from '../../node_modules/@babel/types';
import Home from '../Home';
import Aboutus from './Aboutus';
import Countrydetails from './Countrydetails'
const Routing = ()=>{

    return(
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Aboutus" component={Aboutus} />
                    <Route exact path="/countries/:name" component={Countrydetails} />

                </BrowserRouter>
                </React.Fragment>

    
    
    )}

    export default Routing;