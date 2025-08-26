import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { FaSearch } from "react-icons/fa";



function Header (){
    const navigate = useNavigate();
    return (
         <div className="header-container">
          
         <div className="logo"><h2>LOGO</h2></div>
         <div className="back"><a style={{cursor:"pointer"}} onClick={()=> navigate(-1)}>Geri</a></div>
         <Link to="/">Home</Link>
         <Link to="Items">Items</Link>
         <Link to="slide">Slide</Link>
          <div className="input-wrapper">
            <input type="search" placeholder="ürün veya marka ara" /><div><FaSearch/></div> 
            </div>
        </div>
    )
}

export default Header