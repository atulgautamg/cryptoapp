import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Cryptostate } from './ContextApi';
const Coins3 = () => {
    const [coins,setcoins]=useState([]);
  const [loading,setloading]=useState(false);
  const [page, setpage] = useState(1);
  const [search,setsearch]=useState();
  const {currency,symbol}=Cryptostate();
  const [query,setquery]=useState("");
  const [count,setcount]=useState(0);
  
  const fetchcoins=async()=>{
    const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    setcoins(data);
    setloading(false);
    
  }
  useEffect(()=>{
    fetchcoins();
      },[currency,query])
    
  return (
    <div className='card1 container'>
    <div className='row'>
    
     {coins.map((row,idx)=>(
                                                        
        <div className='card2 col-md-4'>
      <div className="card " style={{width: "18rem"}}>
  <div class=" card-body   ">
    <h5 class="card-title">  </h5>
    <img className='coinimg1' src={row?.image} alt={row.name} />
      
        <p > <Link div  className='td1' to={`/coins/${row.id}`}>{row.name? <div>{row.name}</div> :null} </Link></p> 
      <p>  <Link  to={`/coins/${row.id}`}> <div className='td1'>{row.current_price? <div> {symbol} {row.current_price}</div>:null}</div></Link> </p>
      <p><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap_change_percentage_24h?<div>{row.market_cap_change_percentage_24h.toFixed(2)}</div>:"" }</div></Link></p>
      <p><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap_change_24h?<div> {row.market_cap_change_24h.toFixed(2).toString().slice(0,7)}</div>:null}</div></Link></p>
      <p><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap?<div>{row.market_cap.toFixed(2).toString().slice(0,7)} M</div>:null }</div></Link></p>
      </div>
      </div>
      </div>
        
     ))}    
     </div>
</div>
  )
}

export default Coins3;