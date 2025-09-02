
import React, { useState } from 'react';
import Cookies from 'js-cookie'

const Project= () => {

  let[username,setUsername]=useState('');
  let[password,setPassword]=useState('');
  let[message,setMessage]=useState('');



 
  let Submit=(e)=>{
     e.preventDefault();
     Cookies.set("username",username)
     Cookies.set("password",password)}

let handler=(e)=>{
  e.preventDefault();
 let user= Cookies.get('username')
  let pass=Cookies.get('password')

  if(user==username && pass==password){
    setMessage("login successfull")
  }else{
    setMessage('invalid credential')
  }



}   
let logoutHandler=()=>{
  Cookies.remove('username')
   Cookies.remove('password')
}
  return(
    <div>
      <h3>sign up Page</h3>
      <form onSubmit={Submit}>
          <input type="text" placeholder="Enter Username"value={username} onChange={(e)=> setUsername(e.target.value)}/><br/><br/>
        <input type="password" placeholder="Enter Password"value={password} onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
         <button type="submit">Login</button>
         </form>
      <h3>login Page</h3>
      
         
         <form onSubmit={handler}>
<input type="text" placeholder="Enter Username"value={username} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
        <input type="password" placeholder="Enter Password"value={password} onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
         <button type="submit">Login</button>
         </form>
      <h4>{message}</h4>
<button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Project;