import React from 'react';
import s2 from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';

export const Profile=()=>{
    return(
        <div className={s2.content}>
         <div>
           <img src=""/>
         </div>
         <div>
           ava+discription
         </div>
       <MyPosts/>
       </div> 
       
    )
}