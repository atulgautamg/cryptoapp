import React, { useEffect, useState } from 'react'
import { CoinList } from './Api'
import axios from 'axios';
import ContextApi, { Cryptostate } from './ContextApi';
import { Link, useNavigate } from 'react-router-dom';
import {Pagination} from "@material-ui/lab"

import "./Coins.css"
const Coins = () => {
  const [coins,setcoins]=useState([]);
  const [loading,setloading]=useState(false);
  const [page, setpage] = useState(1);
  const [search,setsearch]=useState();
  const {currency,symbol}=Cryptostate();
  const [query,setquery]=useState("");
  
  const fetchcoins=async()=>{
    const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    setcoins(data);
    setloading(false);
    
  }
  
  const navigate=useNavigate();
  const handlesearch=()=>{
    return coins.filter((coin)=>{
       coin.id.toLowerCase().includes(query) ||  coin.symbol.toLowerCase().includes(query) 
    })
  }
  
const fetchquery=(e)=>{
  setquery(e.target.value);
}

  console.log(query);
  useEffect(()=>{
fetchcoins();
  },[currency,query])

  return (
    <div>
      <div className='cryptolist'>
        <div className='head1'> <h1>Cryptocurrency List</h1> </div>
        <div className='search1'>     
         <form className="search2 d-flex" role="search">
        <input value={query} onChange={(e)=>fetchquery(e)} className="form1 form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handlesearch} className="searchbtn " type="submit">Search</button>
      </form>
      </div>
      </div>
      <div className='tablecontainer'>
           <div className='tablehead'>
           <div className='rowcoin'> <div className='t1'></div> <div className='t2'><div className='rowname'> Coins </div> </div> <div className='t3'> <div className='rowname'>Price </div></div> <div className='t4'><div className='rowname'>24th Change </div></div>  
          <div className='t5'> <div className='rowname'> Market Cap Change </div></div> <div className='t6'> <div className='rowname'>Market Cap Value</div></div>   </div> 
          </div>
          <div className='tablecontent'>
          {coins.filter((row)=>{return query.toLowerCase()===""? row: row.id.toLowerCase().includes(query) ||  row.symbol.toLowerCase().includes(query) }).slice((page-1)*10,(page-1)*10+10).map((row)=>(
            <Link to={`/coins/${row.id}`} div className='rowcoin'>
               <div className='t1'>   <img className='coinimg1' src={row?.image} alt={row.name} />  </div>
               <div className='t2'> {row.name? <div className='rowname' >{row.name}</div> :null} </div>
               <div className='t3'> {row.current_price? <div className='rowname'> {symbol} {row.current_price}</div>:null}</div> 
               <div className='t4'> {row.market_cap_change_percentage_24h?<div className='rowname'>{row.market_cap_change_percentage_24h.toFixed(2)}</div>:"" }</div>
               <div className='t5'> {row.market_cap_change_24h?<div className='rowname'> {row.market_cap_change_24h.toFixed(2).toString().slice(0,7)}</div>:null}</div> 
               <div className='t6'> {row.market_cap?<div className='rowname'>{row.market_cap.toFixed(2).toString().slice(0,7)} M</div>:null }</div>
            </Link>
          ))}
          </div>
         
      </div>
      <div className='page1'>
     Page: <div> <Pagination style={{height:"100px"}}   count={coins.length/10} onChange={(_,value)=>{setpage(value); window.scroll(0,550)}}></Pagination>    
     </div> </div>
    </div>
  )
}

export default Coins
