import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const StonePapSci = () => {

    let arr=["stone","Paper","scissors"]

    const [gam,setGam]=useState()
    const[isBot,setBot]=useState()
    const [isOpt,setOpt]=useState('')

    


function GamOpt(){
    

const choice=Math.floor(Math.random()*arr.length);
const choices=arr[choice]
setOpt(choices)
    if(choices===gam){
        setBot('Tie')

    }else if(choices==="Paper"&& gam === 'stone' || choices==='scissors'&& gam==='Paper'|| choices==='stone' && gam==='scissors'){
        setBot('Bot win')
    }
    else{
        setBot('you Win')
    }
    }
    
        




  return (


    <div>
        <Button className='btn' onClick={()=>setGam("stone")}>Stone</Button> 
        <Button className='btn' onClick={()=>setGam("paper")}>Paper</Button>
        <Button className='btn' onClick={()=>setGam("scissors")}>Scissors</Button>


       
      <h2>{gam}</h2>
<h2> {isOpt}</h2>
      <h3> {isBot}</h3>


        <Button onClick={GamOpt}>Click Me </Button>
    </div>
  )
}

export default StonePapSci