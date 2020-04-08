import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Countries = (props)=>{
 console.log('countrues in countries component',props)

 const renderList = ({countriesdata})=>{
        if(countriesdata){
            return countriesdata.map((item)=>{
               return( 
               <Link to={`/countries/${item.name}`}>
               <div class="panel panel-primary">
               <div class="panel-heading">{item.name}</div>
               <div class="panel-body">
               <span>Currency:{item.currency}</span><br />
               <span>Code: {item.code}</span></div>
             </div></Link>
             )
                
            })
        }
 }

    return(
        <div className="container"> {renderList(props)}</div>
    )

}
export default Countries; 