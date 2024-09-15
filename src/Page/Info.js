import React, { useEffect, useState } from 'react'
import { Cryptostate } from './ContextApi';
import axios from 'axios';
import { HistoricalChart } from './Api';
import { CircularProgress } from '@material-ui/core';

import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart } from 'recharts';

const Info = ({id}) => {
     const {stat,setstat}=Cryptostate();  
  const [graphdata,setgraphdata]=useState([]);
  const {currency}=Cryptostate();
   useEffect(()=>{

    
   })
  const fetchcoins=async()=>{
       const res= await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.toLowerCase()}&days=${stat}`);
  console.log(currency.toLowerCase())      
 const graphdata=res.data.prices.map((price)=>{
  const [timestamp,p]=price;

  const date=new Date(timestamp).toLocaleDateString('en-us')
 return {
  
  Date:date,
  Price:p,
 };
});
setgraphdata(graphdata);
    }
    console.log(graphdata);
useEffect(()=>{
    fetchcoins();
},[stat,currency])
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  return (
    <div>
    <LineChart
          width={900}
          height={400}
          data={graphdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price"  stroke="#82ca9d" />
        </LineChart>
    </div>
  )
}
export default Info;