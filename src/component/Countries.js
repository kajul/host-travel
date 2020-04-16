import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Countries = (props)=>{
 console.log('countrues in countries component',props)

 const renderList = ({countriesdata})=>{
        if(countriesdata){
            return countriesdata.map((item)=>{
               return( 
              
               <div class="panel panel-primary">
               <div class="panel-heading">{item.name}
               
               </div>
               <div class="panel-body">
                <img src={`images/covers/${item.image}`} className="img_container"/>
                <span class="tagline">{item.tageline}</span>
                <button type="button" class="btn-primary">Buy</button>
               </div>
        
             </div>
             )
                
            })
        }
 }

    return(
        <div className="container"> {renderList(props)}</div>
    )

}
export default Countries; 
