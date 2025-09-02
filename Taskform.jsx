import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Taskform = () => {
  let[user,setUsername]=useState(
    {
        Name:'',
        Phonenumber:'',
        Email:'',
    }
    
  )
  function getuserdetails(e){
      setUsername({...user,[e.target.name]:e.target.value})
        console.log(user);  
  }

  function formSave(e){
    e.preventDefault()
     console.log(user);  
  }      
  return (
    <div>
<form onSubmit={formSave}>
    <input placeholder='Username'name='Name'onChange={getuserdetails}></input><br></br><br></br>
    <input placeholder='Phonenumber' name='Phonenumber' onChange={getuserdetails}></input><br></br><br></br>
    <input placeholder='Email Id' name='Email' onChange={getuserdetails}></input><br></br><br></br>
    <button >Submit</button>
<p></p>
   </form>
    </div>
  )
}

export default Taskform
