import React from 'react'
import { Link } from 'react-router-dom' 
import cypto from './crypto.PNG';
import { Cryptostate } from './ContextApi';
const Navbar = () => {
    
  const {currency,setcurrency}=Cryptostate();
  console.log(currency);
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <div className='img3' >  <img style={{width:"50px",height:"50px"}} src={cypto} alt="" /> </div>
    <Link className="navbar-brand" style={{padding:"20px"}} to="/">CryptoMania</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>

      </ul>
      <div className="select1 form-floating">
  <select value={currency} onChange={(e)=>setcurrency(e.target.value)} className="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example">
    <option value={"INR"}>INR</option>
    <option value={"USD"}>USD</option>
  </select>
  </div>
    </div>
  </div>
</nav>
      
    </div>
  )
}


export default Navbar
