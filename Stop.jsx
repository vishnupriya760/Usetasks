



import React, { useState, useEffect } from 'react';

const Stopwatch=()=> {
  let [sec,setSeconds]=useState(0);
  let [running,setRunning]= useState(false);

  useEffect(()=>{let interval;if(running){
      interval=setInterval(()=>{setSeconds(prev=>prev+1);},1000);
    }
    return()=>clearInterval(interval);},[running]);
  let start=() => setRunning(true);
  let stop = ()=> setRunning(false);
  let reset =()=> {
    setRunning(false);
    setSeconds(0);
  };
  return (
    <div>
      <h2>Time:{sec} sec</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;


