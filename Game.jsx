import React, { useState } from 'react'
import { use } from 'react';

import { Button } from 'react-bootstrap';

const Game = () => {

  
    let opt=['rock','paper','scissors'];

    let [user,setUser]=useState('')

    let [bot,setBot]=useState('')

    let [result,setResult]=useState('STart match')
  
function findResult(){
  
  let value=Math.floor(Math.random()*3)
  console.log(value);

  setBot(opt[value])


  if(bot==user){
    setResult('tie match')
  }else if((user=='rock'&&bot=='scissors')||(user=='scissors' && bot=='paper') || (user=='paper'&&bot=='rock')){
    setResult('user won the match')
  
}else{
  setResult('bot won the match')
}
}
      
  return (
    <div>

      <select onChange={(e)=>setUser(e.target.value)}>
        <option>rock</option>
        <option>paper</option>
        <option>scissors</option>
        {/* {
          opt.map(op=><option>{op}</option>)
        } */}
      </select>
      

      <p>you selected {user}</p>
      <p>bot selected {bot}</p>


      <Button onClick={findResult}>Play</Button>

      <h1>{result}</h1>

    </div>
  )
}

export default Game