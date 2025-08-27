import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { FaSearch } from "react-icons/fa";



function Header ({searchTerm, setSearchTerm}){
    const navigate = useNavigate();
    return (
         <div className="header-container">
          
         <div className="logo"><h2>LOGO</h2></div>
         <div className="back"><a style={{cursor:"pointer"}} onClick={()=> navigate(-1)}>Geri</a></div>
         <Link to="/">Home</Link>
         <Link to="Items">Items</Link>
         <Link to="slide">Contact</Link>
          <div className="input-wrapper">
            <input
             type="text"
             placeholder="ürün veya marka ara" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div><FaSearch/></div> 
            </div>
        </div>
    )
}

export default Header