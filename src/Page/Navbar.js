import React from 'react'
import { Link } from 'react-router-dom' 
import cypto from './crypto.PNG';
import techno from "./techno2.jpg";
import { Cryptostate } from './ContextApi';
import backimg from './backimg1.PNG';
const Navbar = () => {
    
  const {currency,setcurrency}=Cryptostate();
  console.log(currency);
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-primary" style={{backgroundImage:`url(${backimg})`,width:"100vw",height:"120px",backgroundSize:"cover"}}>
  <div className="container-fluid">
    <div className='img3' >  <img style={{width:"50px",height:"50px"}} src={cypto} alt="" /> </div>
    <Link className="navbar-brand" style={{padding:"20px",color:"white",}} to="/">CryptoMania</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <div className="select4 ">
  <select value={currency} onChange={(e)=>setcurrency(e.target.value)} className="btn2" >
    <option className='btn3' value={"INR"}>INR</option>
    <option className='btn3' value={"USD"}>USD</option>
  </select>
  </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}


export default Navbar
