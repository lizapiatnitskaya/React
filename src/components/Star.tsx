import React from 'react';

export function Star(props:any){
    return(
    <div>
         <Star2 title={props.title}/>
         <Star3 title={props.title}/>
    </div>
    );
  }

  function Star2(props:any){
    return(
        <div>{props.title}</div>
    );
  }

  function Star3(props:any){
     return(
        <div>
            <ul>
                <li>{props.title}</li>
                <li>{props.title}</li>
            </ul>
        </div>  
    );
  }
  