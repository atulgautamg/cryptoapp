import { red } from '@material-ui/core/colors';
import { style } from '@mui/system';
import React, { useEffect, useMemo, useRef,createContext, CreateContext } from 'react'
import { useState } from 'react'

const Practice = () => {

const[count,setcount]=useState(0);  
const useme=useRef();
const count1=useRef(0);
useEffect(()=>{
 count1.current=count1.current+1; 
},)
const handlechange=()=>{
     useme.current.style.background="red";
}

console.log(count1);
return (
    
    <div >
         
         count: {count1.current}  
         <button onClick={handlechange} ref={useme}>click  </button>
    </div>

  
  )
}

export default Practice
