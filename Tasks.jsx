import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    let[num,setNum]=useState('')
    let[res,setRes]=useState([])
function getMultiplication(){
    let number=[];
    for(let i=1;i<=10;i++)  {
        // console.log(number*i);
        // =number*i
        number.push(`${num}x${i}=${num*i}`)
    }
    setRes(number)
}    
  return (
    <div>
<input placholder='Multiplication'value={num}onChange={(e)=>setNum(e.target.value)}></input>
<button onClick={getMultiplication}>number</button>
 {res.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

 {/* <p>{res}</p> */}
   </div>
  )
}

export default Tasks



