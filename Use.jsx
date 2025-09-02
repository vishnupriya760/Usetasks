import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button';

const Use = () => {
   const [user,setUser]=useState(
    {
      firstname:"",
      surname:'',
      dob:'',
      gender:'',
      mobilenumber :'',
      
      password:'',
      



      
    }
   )
   function getUserDetails(e){
    setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
        
    }
    function formSave(e){
        e.preventDefault()
        console.log(user);
   }
  return (
    <div >
      <form onsumbmit={formSave}>
        <input placeholder='Firstname' name='firstname' onChange={getUserDetails}></input>
      <input placeholder= 'Surname'name='surname' onChange={getUserDetails}></input><br></br>
      <p className='ghi'>Date of Birth</p> 
      <select className='lo ' name='dob'onChange={getUserDetails}><br></br>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
</select>


<select className='jan'name='dob'onChange={getUserDetails}>
    <option>Jan</option>
    <option>Feb</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
     <option>June</option>
     <option>July</option>
     <option>August</option>
     <option>September</option>
     <option>October</option>
     <option>November</option>
     <option>December</option>


</select>

<select className ='2001'name='dob' onChange={getUserDetails}>
    <option>2001</option>
    <option>2002</option>
    <option>2003</option>
    <option>2004</option>
    <option>2005</option>
    <option>2006</option>
    <option>2007</option>
    <option>2008</option>
     <option>2009</option>
      <option>2010</option>



  
</select >

  <label><input type='radio' value='male'name='gender' onChange={getUserDetails}/>male</label>
  <label><input type='radio' name='gender' value ='female'onChange={getUserDetails}/>Female</label>
  <label><input type='radio' name='gender' value ='other'onChange={getUserDetails}/>Other</label>
  <br></br>
  
<input placeholder='Mobilenumber'name='mobilenumber'onChange={getUserDetails}></input><br></br>
<input placeholder='Password'name='password' onChange={getUserDetails}></input><br></br>
<Button variant ='info'>Submit</Button>
</form>





    
    </div>



 
  )
}

export default Use