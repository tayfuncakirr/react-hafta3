import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
  return (
    <div>
        <ul>
            <li onClick={()=> navigate("/Menu")} >Menu</li>
            <li onClick={()=> navigate("/product")} >Product</li>
        </ul>
    </div>
  )
}

export default Header