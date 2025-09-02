
import React, { useState } from 'react'

const Dark = () => {
    let[isDark,setDark]=useState(false)
    
  
  return (
    
    <div class={`${isDark ? `dark` :`light`}`}>
         <button  onClick={()=>setDark(!isDark)}>Click me</button>
        {/* <button className='ik'onClick={()=>setLight(prv=>prv)}>Light</button>  */}

    </div>
        
        

       

        
        
        

        
        
        
        
  )
}

export default Dark