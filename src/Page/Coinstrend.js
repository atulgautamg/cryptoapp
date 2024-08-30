import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Cryptostate } from './ContextApi';
const Coinstrend = () => {
  const [coins1,setcoins1]=useState([]);
  const [trend,settrend]=useState([]);
  const {symbol,currency}=Cryptostate();
    const [query,setquery]=useState("");
  const fetchcoins=async()=>{
    const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    const coins=res.data.map((coin)=>{
        return {
            
            name:coin.name,                                        
              
            image:coin.image,
            current_price:coin.current_price,
            id:coin.id
        }
    })
    setcoins1(coins); 
console.log(coins);  
}
const fetchquery=(e)=>{
  setquery(e.target.value);
}

const searchcoins=async()=>{
    const {query1}=query;
    console.log(query);
    if(query.length>3)
    {

    
    const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en `);
    if(res==null)
    {

    }
    else{
    const coins=res.data.map((coin)=>{
        return {
            name:coin.name,
            image:coin.image,
            current_price:coin.current_price,
            id:coin.id
        }
    })
  settrend(coins);}
}
    else {
         settrend(coins1);
    }
    
  }
  useEffect(()=>{
    fetchcoins();
    searchcoins();
  },[query,trend])
    return (
    <div>
        <div className='trend'>
        <input type="text" value={query} onChange={(e)=>fetchquery(e)} />
            
           {trend? <div> { trend.map((row)=>{
                return (
                 <div key={row.id}>
                 <div className='coinsrow'>
        
        <Link to={`/coins/${row.id}`}><div   > <img className='coinimg1' src={row?.image} alt={row.name} /> </div></Link> 
        <div > <Link div  className='td1' to={`/coins/${row.id}`}>{row.id? <div>{row.id}</div> :null} </Link></div> 
      <div>  <Link  to={`/coins/${row.id}`}> <div className='td1'>{row.current_price? <div> {symbol} {row.current_price}</div>:null}</div></Link> </div>
      </div>
                 </div>
                )
            })}</div>:null}
        </div>
    </div>
  )
}

export default Coinstrend;
