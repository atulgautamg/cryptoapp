import React from 'react'
import axios from 'axios'
const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '5de7d09ee3mshd7410ff3114cedap1363f0jsn4b8fa6a3db47',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
   const fetchcoins=async()=>{
       
  try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
   }  
const Coins1 = () => {
  return (
    <div>
        <div onClick={fetchcoins}> <h1>Coins</h1></div>      
    </div>
  )
}

export default Coins1
