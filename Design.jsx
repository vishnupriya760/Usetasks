
import React, { useState } from 'react'
const Design = () => {
    let [color,setColor]=useState("")
    function getName(e){
        setColor(e.target.value);  
    }
  return (
    <div>
       <div >
        <div className='gh'style={{backgroundColor:color}} >
        </div>
     <input  type=''placeholder='enter'onChange={getName} value={color}></input>
     
    </div>
    </div>
  )
}

export default Design