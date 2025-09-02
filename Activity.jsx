import React, { useState } from 'react'


const Activity = () => {
    let [like,SetLike]=useState(0)
    let [Dislike,SetDislike]=useState(0)
    let [isShow,setIsShow]=useState(false)
    

  return (
    <div className>
      
    <div className='hi'>
       <button className='j' onClick={()=>SetLike(prv=>prv+1)}>like</button>
      

       <p>like{like}</p>
        <button className='k' onClick={()=>SetDislike(prv=>prv+1)}>Dislike</button>
 
        <p>Dislike{Dislike}</p>

{

  isShow &&<p>hello</p>
}
<button className='ji' onClick={()=>setIsShow(!isShow)}>{isShow ?"Dark":"Light"}</button>
    

    </div>
    </div>
  )
}

export default Activity