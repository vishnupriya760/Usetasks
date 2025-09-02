import React, { use, useState } from 'react'
import { Button } from 'react-bootstrap'

const Home = () => {

    let [counter,setCounter]=useState(0)

    let [isShow,setIsShow]=useState(false)

    let [name,setName]=useState('guest')

     let [length,SetLength]=useState(0)
     let [width,SetWidth]=useState(0)
     let [area,setArea]=useState("")

     function areaValue(){
        let result=length*width
        setArea(result)
     }

    function getName(e){
        // console.log(e);
        // console.log(e.target);
        console.log(e.target.value);
        setName(e.target.value)
    }
  return (
    <div >
        <button onClick={()=>setCounter(prv=>prv-1)}>-</button>
        <p>{counter}</p>
        <button onClick={()=>setCounter(prv=>prv+1)} >+</button>
        <Button variant='danger'  onClick={()=>setCounter(0)}>Reset</Button> <br></br>

       {
        isShow && <p>This is jonna</p>
       }
       <Button onClick={()=>setIsShow(!isShow)}>{isShow ? "hide":'show'}</Button>
       <input onChange={getName}></input>
       <p>welcome {name} </p>


       <input placeholder='length' onChange={(e)=>SetLength(e.target.value)}></input>
       <input placeholder='width' onChange={(e)=>SetWidth(e.target.value)}></input>
       <Button onClick={areaValue}> result</Button>

       <p>{area}</p>

       <p>{length} {width}</p>
    
    </div>
  )
}

export default Home