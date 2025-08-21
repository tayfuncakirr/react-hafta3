import React from "react";
import {Link, useNavigate} from "react-router-dom"


function Header (){
    const navigate = useNavigate();
    return (
        <div className="header-container">
         <Link to="/">Home</Link>
         <Link to="slide">Slide</Link>
         <Link to="Items">Items</Link>
         <div><a style={{cursor:"pointer"}} onClick={()=> navigate(-1)}>Geri</a></div>
        </div>
    )
}

export default Header