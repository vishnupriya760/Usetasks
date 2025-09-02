import React, { useState } from 'react'

const Taskcapil = () => {

let[text,setText]=useState("")

function getfirstletcapi(e){

  
  let value=e.target.value;
  if(value.length>0){
     value=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
    setText(value);

    
  }
}
  return (
    <div>
 <input placeholder="text"value={text} onChange={getfirstletcapi} /><br/><br/>
 <p>{text}</p>









    </div>
  )
}

export default Taskcapil