
import React, {useState}from 'react';


const Font = () => {
 let [fontSize ,setFontSize]=useState(16);
 let increaseFont=()=>{setFontSize(prev=>prev+2);
 }
let decreaseFont=()=>{ setFontSize(prev=>prev-2);
}
 
  }
  return (
  
    <div className='jk'>
    <div style={{fontSize: fontSize+'px'}}>

      <button onClick={increaseFont}>Increase Font</button>
      <button onClick={decreaseFont}>Decrease Font</button>
      <p>This text size will change</p>
    </div>
    </div>
  )


export default Font