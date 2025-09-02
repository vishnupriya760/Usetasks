
import React, { useState } from 'react'
const Colour= () => {
    let [color,setColor]=useState("")
    function getColor(e){
        setColor(e.target.value);  
    }
  return (
    <div>
       <div>
        <div className='cl'style={{backgroundColor:color}}>  
        </div>
     <input placeholder='Enter Any Color'onChange={getColor} value={color}></input>
     
     </div>
    </div>
  )
}

export default Colour
