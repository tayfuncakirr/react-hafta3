import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="product">Product</Link>
            <Link to="About">About</Link>
    </div>
  )
}

export default Header