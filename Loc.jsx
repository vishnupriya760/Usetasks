import React, { useState } from 'react'

const Loc = () => {
    let[name,setName]=useState()

    function saveName(){
        localStorage.setItem('user',name)
    }
  return (
    <div>
        <form onSubmit={saveName}>
        <input  placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
        <button>submit</button>
</form>

<p>{localStorage.getItem('user')}</p>
<button onClick={()=>localStorage.clear()}>remove storage</button>

    </div>
  )
}

export default Loc