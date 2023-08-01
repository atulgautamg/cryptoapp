import React from 'react'
import techno from "./techno2.jpg";
import "./Banner.css"
import Animate from './Animate';
import Coins from './Coins';
const Banner = () => {
  return (
    <div>
      <div className='techimg' style={{backgroundImage:`url(${techno})`,width:"100vw",height:"400px"}}>
        <div className='headh1'>
        <h1> CyptoCurrency </h1>
        </div>
        <div className='animate1'>
            
        </div>
      
      </div>
    </div>
  )
}

export default Banner
