import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Cook = () => {

    
    const [lang,setLang]=useState(Cookies.get('language'))

    function createCookies(e){
        setLang(e.target.value)
        console.log(e.target.value);
        Cookies.set('language',e.target.value, {expires:1})

        




    }
  return (
    <div>

      <select onChange={createCookies}>
        <option>en</option>   
          <option>tn</option>
             <option>ma</option>

      </select>

      <p>{lang}</p>

      <button onClick={()=>Cookies.remove('language')}>X</button>
    </div>
  )
}

export default Cook