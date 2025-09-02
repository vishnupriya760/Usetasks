import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Task = () => {
   
    let [fac, setFact]=useState()
    let [result,setResult]=useState()

    let[name,setName]=useState()
    let[reverse,setReverse]= useState()
    

    let[palin,setPalin]=useState()
    let[msg,setMsg]=useState()
   
    
    let[messure,setMessure]=useState(
      {
        length:'',
        breadth:'',
        
      }
    )
     

    let [areaRec,setAreaRect]=useState(0)

  

   

   
      
      
    
    
  
    function fact(){
      
       let res=1
       for(let i=1;i<=fac;i++){
        res*=i;
       }

       setResult(res)


      }
      
      

    function revname(){
    console.log(name);
      
      let rev="";
      for(let i=name.length-1;i>=0;i--){
        rev+=name[i];
      }
      setReverse(rev)

      setName('')

    }   
    

   
    function isPalindrome(){
      let str = palin
    let rev = "";
    for (let i = str.length-1; i>= 0; i--) {
        rev += str[i];
    }
    if (rev === str) {
        setMsg("palindrome")
    } else {
        setMsg("not a palindrome");
    }

  }


  function getareaofrec(e){
      setMessure({...messure,[e.target.name]:e.target.value})
     console.log(messure);

      
     }

  function formSave(e){
    e.preventDefault()
    console.log(messure)
     let area=messure.length*messure.breadth

    setAreaRect(area)


    
  }
  
 

   
    
  return (
   

    <div>
    <input placeholder='Enter a number'value={fac} onChange={(e)=>setFact(e.target.value)}/>
    
    <Button onClick={fact}>find</Button>
    <p>{result}</p>

       

        <input placeholder='Enter a name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <Button onClick={revname}>Click me</Button>
        <p>{reverse}</p>
     
     
       <input type='text' placeholder='palindrome' value={palin} onChange={(e)=>setPalin(e.target.value)}></input>
       <button onClick={isPalindrome}>find</button>
       <p>{msg}</p>
   
<div>
   <form onSubmit={formSave}>
   <input placeholder= 'area of rectangle' name="length" onChange={getareaofrec}></input>
   <input placeholder='area of rectangle'   name="breadth" onChange={getareaofrec}></input>
  

   <button>find area</button>
   

   
<p>{messure.length}</p>
<p>{messure.breadth}</p>
   
   
   </form>
   <p>{areaRec}</p>

</div>


    </div>
  )
}

export default Task



