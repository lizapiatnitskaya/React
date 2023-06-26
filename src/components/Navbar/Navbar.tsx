import React from 'react';
import s1 from './Navbar.module.css'

export const Navbar=()=>{
    return(
        
        <nav className={s1.nav}>
         <div>
           <a>Profile</a>
         </div>
         <div>
           <a>Messages</a>
         </div>
         <div>
           <a>News</a>
         </div>
         <div>
           <a>Music</a>
         </div>
         <div>
           <a>Settings</a>
         </div>
       </nav>
        
    )
}