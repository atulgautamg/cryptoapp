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
  const fetchcoins=async()=>{
    const {data}=await axios.get(CoinList(currency));
    setcoins(data);
    setloading(false);
  }
  const navigate=useNavigate();
  const handlesearch=()=>{
    return coins.filter((coin)=>{
       coin.name.toLowerCase().includes(search) ||  coin.symbol.toLowerCase().includes(search) 
    })
  }
  console.log(coins);
  useEffect(()=>{
fetchcoins();
  },[currency])
  return (
    <div>
      <div className='cryptolist'>
        <div className='head1'> <h1>Cryptocurrency List</h1> </div>
        <div className='search1'>     
         <form className="search2 d-flex" role="search">
        <input onChange={(e)=>setsearch(e.target.value)} className="form1 form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handlesearch} className="searchbtn " type="submit">Search</button>
      </form>
      </div>
 <div className='coinstable container'>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Coins</th>
      <th scope="col">Price</th>
      <th scope="col">24th Change</th>
      <th scope="col">Market Cap Change</th>
      <th scope="col">Market Cap</th>
      
    </tr>
  </thead>
  <tbody className='tbody'>
  {coins.slice((page-1)*10,(page-1)*10+10).map((row)=>{
    return (
             <tr className='coinsrow'>
        
        <Link to={`/coins/${row.id}`}><td    scope="row" > <img className='coinimg1' src={row?.image} alt={row.name} /> </td></Link> 
        <td > <Link div  className='td1' to={`/coins/${row.id}`}>  {row.name} </Link></td> 
      <td>  <Link  to={`/coins/${row.id}`}> <div className='td1'> {symbol} {row.current_price}</div></Link> </td>
      <td><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap_change_percentage_24h.toFixed(2)}</div></Link></td>
      <td><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap_change_24h.toFixed(2).toString().slice(0,7)}</div></Link></td>
      <td><Link to={`/coins/${row.id}`}> <div className='td1'> {row.market_cap.toFixed(2).toString().slice(0,7)} M</div></Link></td>
      </tr>

        )
  })}
  
  </tbody>
</table>
</div>
      </div>
      <div className='page1'>
     Page: <div> <Pagination style={{height:"100px"}}   count={coins.length/10} onChange={(_,value)=>{setpage(value); window.scroll(0,550)}}></Pagination>    
     </div> </div>
    </div>
  )
}

export default Coins
