import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Product from './pages/Product'
import Header from './Header'
import ProductDetails from './pages/ProductDetails'

//useParams hook unu ProductDetails.jsx de kullanacağız.

//useParams nedir ?

//useParams ile amacımız product.jsx de ki butonda yönlendirdiğimiz, her ürünün ilgili id sine gitmek
//bu id yi route içinde ":id olarak verdik useparams gelen değeri "id" değişkenine atayacak."

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='menu' element={<Menu/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>} />
         <Route path='about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
