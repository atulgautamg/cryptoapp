import React, { useEffect, useState } from 'react'

const Index3 = () => {
    const [flag,setflag]=useState(0);
    useEffect(()=>{
        console.log(flag);
    },[])
  return (
    <div>
    {console.log('hello world')}
      <button onClick={()=>setflag(flag+1)}>  
      <h1>add </h1>
      </button>
    </div>
  )
}

export default Index3
