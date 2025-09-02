import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Mrngtask = () => {

let [fac,setFact]=useState()
let [result,setResult]=useState()

let [sum,setSum]=useState()
let[sub,setSub]=useState()
let[res,setRes]=useState(0)


function calculate(e){
  
  let a=10
  let b=12
  let op=e.target.value
if (op==='+'){
  setRes(a+b);
}else{
  setRes(a-b);
}
}



function fact(){
       let res=1
       for(let i=1;i<=fac;i++){
        res*=i;

       }
       setResult(res) 
       let sumDigits=0
       while (res>0){
        sumDigits=sumDigits*10+(res%10)

        res=Math.floor(res/10)


       }
       console.log(sumDigits);
      }
      
  return (
    <div>
     <input placeholder="enter a number" value={fac}onChange={(e)=>setFact(e.target.value)}></input><br></br><br></br> 
    <input placeholder="enter a number" value={sum}onChange={(e)=>setSum(e.target.value)}></input><br></br>
    <input placeholder="enter a number" value={sub}onChange={(e)=>setSub(e.target.value)}></input><br></br>
    <select className='number'id="" onChange={calculate}>
    <option>+</option>
    <option>-</option>
    </select>
    <p>{res}</p>
     <Button onClick={fact}>submit</Button>
   <p>{result}</p> 
   </div>
  )
}

export default Mrngtask