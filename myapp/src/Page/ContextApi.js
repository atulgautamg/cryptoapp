import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const Crypto=createContext();
const ContextApi = ({children}) => {
    const [currency,setcurrency]=useState("INR")
    const [symbol,setsymbol]=useState("Rs.");
   const [stat,setstat]=useState(1);
    useEffect(()=>{
        if(currency==="INR")
         setsymbol("Rs.");
         else if(currency==="USD")
         setsymbol("$");
    },[currency]);
  return (
      <Crypto.Provider value={{currency,symbol,setcurrency,stat,setstat}} >
        {children}
      </Crypto.Provider>
    
  )
}

export default ContextApi;
export const Cryptostate=()=>{
   return  useContext(Crypto);
}
