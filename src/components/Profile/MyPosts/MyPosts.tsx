import React from 'react';
import s3 from './MyPosts.module.css'
import { Post } from './Post/Post';

export const MyPosts=()=>{
    return(
        <div className={s3.content}>
         <div>
           <textarea></textarea>
           <button>Add post</button>
           
         </div>
         <div>
           New post
         </div>
         <Post />
       </div> 
       
    )
}