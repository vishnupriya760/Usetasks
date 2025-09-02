
  import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Project = () => {
  let [user,setUser]=useState({username:'',password:'' });
  let [message,setMessage]=useState('');

  
  let handle=(e)=>{
    let {name,value}=e.target;
    setUser((User)=>({...User,[name]:value,}));
  };


  const handleSignup =(e)=>{
    e.preventDefault();
    Cookies.set('username', user.username);
    Cookies.set('password', user.password);
    setMessage('login sucessfully');
  };

  const handleLogin =(e)=>{
    e.preventDefault();
    const Username=Cookies.get('username');
    const Password=Cookies.get('password');

    if (user.username===Username && user.password===Password) {
      setMessage('Login successful');
    } else {
      setMessage('Invalid credentials');
    }
  };

 
  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('password');
    setUser({ username:'',password:'' });
    setMessage('Log out');
  };

  return (
    <div>
      <h3>Sign Up Page</h3>
      <form onSubmit={handleSignup}>
        <input type="text" name="username"placeholder="Enter Username"value={user.username}onChange={handle}/>
        <br/><br />
        <input type="password"name="password"placeholder="Enter Password" value={user.password}onChange={handle}/>
        <br/><br />
        <button type="submit">Sign Up</button>
      </form>

      <h3>Login Page</h3>
      <form onSubmit={handleLogin}>
        <input type="text"name="username"placeholder="Enter Username"value={user.username}onChange={handle}/>
        <br/><br/>
        <input type="password" name="password"placeholder="Enter Password"value={user.password}onChange={handle} />
        <br/><br/>
        <button type="submit">Login</button>
      </form>

      <h4>{message}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Project;