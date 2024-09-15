import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cryptostate } from './ContextApi';
import { SingleCoin } from './Api';
import axios from 'axios';
import Info from './Info';
import  HtmlParser, { } from "react-html-parser"
import DOMPurify from 'dompurify';
import Navbar from './Navbar';
import "./Coinpage.css";
const Coinpage = () => {
    const {id}=useParams();
    const [coin,setcoin]=useState({});
    const {stat,setstat,currency,symbol}=Cryptostate();
    const url=`https://api.coingecko.com/api/v3/coins/${id}`
    useEffect(()=>{
      axios.get(url).then((res)=>{
        setcoin(res.data)
      }).catch((error)=>{
        console.log(error);
      })
    },[])
    
  return (
    <div>
    <Navbar></Navbar>
    <div className='div3'>
    <div className='div1'>
       <div className='coinh1'>
       {coin.id? <h1 className='coinid'> {coin.id.toUpperCase()}</h1>:null}
       {coin.symbol? <p>{coin.symbol.toUpperCase()} </p>:null}
       </div>
      <div className='imgdiv'>
            <div className='coinimg'> 
      {coin.image?<img src={coin.image.large} alt="" />:null}
      </div>
      <div className='price1'>
       {currency=="USD"? <div>{coin.market_data?.current_price?<h3>Price :{coin.market_data?.current_price.usd.toFixed(3)} {symbol} </h3> :null} </div>
      :<div>{coin.market_data?.current_price?<h3>Price:{coin.market_data?.current_price.inr.toFixed(3)} {symbol} </h3> :null}</div> 
      }{coin.market_cap_rank?<h3> Rank :  {coin.market_cap_rank}  </h3>:null}
      </div>
</div>
{currency=="USD"?<div className='cointable1'>
  <div> {coin.market_data?.market_cap? <p>Market Cap: {coin.market_data.market_cap.usd} {symbol} </p>:null} </div>
  <div> {coin.market_data?.low_24h? <p>Low: {coin.market_data.low_24h.usd} {symbol} </p>:null}  </div>
  <div> {coin.market_data?.high_24h? <p>High: {coin.market_data.high_24h.usd}  {symbol} </p>:null} </div>
  <div> {coin.market_data?.circulating_supply? <p>Circulating Supply: {coin.market_data.circulating_supply} </p>:null} </div>
   
    
   </div>:
   <div className='cointable1'>
  <div> {coin.market_data?.market_cap? <p>Market Cap: {coin.market_data.market_cap.inr} {symbol} </p>:null} </div>
  <div> {coin.market_data?.low_24h? <p>Low: {coin.market_data.low_24h.inr} {symbol} </p>:null} </div>
  <div> {coin.market_data?.high_24h? <p>High: {coin.market_data.high_24h.inr}  {symbol} </p>:null} </div>
  <div> {coin.market_data?.circulating_supply? <p>Circulating Supply: {coin.market_data.circulating_supply} </p>:null} </div>
   
    
   </div>
   
    }

   <div className="option1 form-floating">
   <h3>Cryptocurrency Statistics</h3>
  <select value={stat} onChange={(e)=>{setstat(e.target.value)}} className="select1 "  >
  
    <option className='select2' value={1}>24hr</option>
    <option className='select2' value={7}>1 week </option>
    <option className='select2' value={30}>1 month</option>
    <option  className='select2' value={365}>1 year</option>
  
  </select>
  
</div>
       </div>
       <div className='div2' >
       <table className="table1">
  <thead class="thead-light rt3">
    <tr>
      <th scope="col">1h</th>
      <th scope="col">24h</th>
      <th scope="col">7d</th>
      <th scope="col">14d</th>
      <th scope="col">30d</th>
      <th scope='col'>1yr </th>

      
    </tr>

  </thead>
  <tbody>
    <td> {coin.market_data?.price_change_percentage_1h_in_currency? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd} % </p>:null} </td>
    <td> {coin.market_data?.price_change_percentage_24h_in_currency? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd} % </p>:null} </td>
    <td> {coin.market_data?.price_change_percentage_7d_in_currency? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd} % </p>:null} </td>
    <td> {coin.market_data?.price_change_percentage_14d_in_currency? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd} % </p>:null} </td>
    <td> {coin.market_data?.price_change_percentage_30d_in_currency? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd} %</p>:null} </td>
    <td> {coin.market_data?.price_change_percentage_1y_in_currency? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd} %</p>:null} </td>
  
  </tbody>
  </table>

       <div className='info container' >
         <h2>About</h2>
         <p dangerouslySetInnerHTML={{
          __html:DOMPurify.sanitize(coin.description?coin.description.en :null)
         }}></p>
        
        
       </div>
       <div className='graph'>
       <Info coin={coin} id={id}></Info>
       </div>
       </div>
       </div>
       
       
      
    </div>
  )
}

export default Coinpage
