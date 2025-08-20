import React from 'react'
import { useNavigate } from 'react-router-dom'
//  useNavigate, link bileşenine benzer, Sayfalar arasında gezinmeyi sağlar.



function Header() {
    const navigate = useNavigate();
  return (
    <div className='header'>
        <ul>
            <li onClick={()=> navigate("/Menu")} >Menu</li>
            <li onClick={()=> navigate("/product")} >Product</li>
        </ul>
    </div>
  )
}

export default Header