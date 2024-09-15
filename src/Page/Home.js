import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
import { Cryptostate } from './ContextApi';
import Banner from './Banner';
import Coins from './Coins';
import Navbar from './Navbar';
import Coinstrend from './Coinstrend';
const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
<Banner></Banner>
<Coins></Coins>

   </div>
  )
}

export default Home
