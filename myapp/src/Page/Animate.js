import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TrendingCoins } from './Api'
import { Cryptostate } from './ContextApi'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import Coins1 from './Coins1'
const Animate = () => {
    const [trending,setrending]=useState([]);
    const {currency,symbol}=Cryptostate();
        const fetchcoins=async()=>{
            const {data}=await axios.get(TrendingCoins(currency));
         setrending(data);
        }
        console.log(trending);
        useEffect(()=>{
          fetchcoins();
        },[currency])
        const responsive={
            
            0:{items:2},
            512: {
                items: 4,

            },

         };
         const commas=(x)=>{
          return x.toString().replace()
         }
      const items =trending.map((coins)=>{
        let profit=coins.market_cap_change_percentage_24h;
        return( 
        <Link to={`/coins/${coins.id}`}>
              <img className='imgcoins' src={coins.image} alt={coins.name} />
             <br />
             <span>{coins.symbol} 
             </span>
             <br />
             <span>
               {coins?.price_change_percentage_24h.toFixed(2)}%
             </span>
            
         <br />
             <span>
              {symbol} {coins.current_price} 
             </span>
        </Link>

        )
      })  
    return (
    
   <div>
        <AliceCarousel mouseTracking infinite autoPlayInterval={1000} 
        animationDuration={1500} disableDotsControls disableButtonsControls responsive={responsive} items={items}>

        </AliceCarousel>
      
      
    </div>
  )
}

export default Animate
