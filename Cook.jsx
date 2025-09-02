import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Cook = () => {

  let [username,setUsername ]=useState('')




let Submit=(e)=>{
       e.preventDefault();
       Cookies.set("username",username)}
      

 let user= Cookies.get('username')



 
  
  
  
  return (
    <div>
<form onSubmit={Submit}>
  <input placeholder='name'onChange={(e)=>setUsername(e.target.value)}></input>
  
  <button>Submit</button>
  {/* <p>{Cookies.getItem('user',user)}</p> */}
   {/* <button onClick={()=>Cookies.clear()}>remove</button>  */}
</form>
    </div>
  )
}

export default Cook