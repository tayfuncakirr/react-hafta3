import React from "react";
import {Link, useNavigate} from "react-router-dom"


function Header (){
    const navigate = useNavigate();
    return (
         <div className="header-container">
          
         <div className="logo"><h2>LOGO</h2></div>
         <div className="back"><a style={{cursor:"pointer"}} onClick={()=> navigate(-1)}>Geri</a></div>
         <Link to="/">Home</Link>
         <Link to="slide">Slide</Link>
         <Link to="Items">Items</Link>
        </div>
    )
}

export default Header