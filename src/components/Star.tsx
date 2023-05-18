import React from 'react';

type TitlePropsType = {
    title:string
    collapsed:boolean
}

export function Star(props:TitlePropsType){
       
        if (props.collapsed === true){
            return(
                <div>
                     <Star2 title={props.title}/>
                     <Star3 title={props.title}/> 
                </div>
            );
        } else {
            return(
                <div>
                  <Star2 title={props.title}/>  
                </div>
            )
        }
  }

  type TitlePropsType2 = {
    title:string
}

  function Star2(props:TitlePropsType2){
    return(
        <div>{props.title}</div>
    );
  }

  function Star3(props:TitlePropsType2){
     return(
        <div>
            <ul>
                <li>{props.title}</li>
                <li>{props.title}</li>
            </ul>
        </div>  
    );
  }
  