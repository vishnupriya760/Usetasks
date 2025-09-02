import React, { useState } from 'react'

const Forms = () => {
    const [user,setUser]=useState(
        {
            username:"",
            email:'',
            lang:'',
            gender:''
        }
    )

    function getuserdetails(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
        
    }
    function formSave(e){
        e.preventDefault()
        console.log(user);
        
    }
  return (
    <div>

      <form onSubmit={formSave}>
          <input placeholder='name' name='username' onChange={getuserdetails}/>
        <input placeholder='email' name='email' onChange={getuserdetails}/>
        <select name='lang'onChange={getuserdetails}>
            <option value='english'>English</option>
            <option value='english'>Tamil</option>

            <option value='english'>French</option>

        </select>

        <label><input type='radio' value="male" name='gender' onChange={getuserdetails}/>male </label>
               <label><input type='radio' value="Female" name='gender' onChange={getuserdetails}/> female</label>
                      <label><input type='radio' value="other" name='gender' onChange={getuserdetails}/>other </label>

                      <button>submit</button>
      </form>



                      <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.lang}</p>
                      </div>

    </div>
  )
}

export default Forms