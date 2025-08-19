import { useState } from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom" 
import './App.css'
import Header from './pages/Header';
import Product from './pages/Product';
function App() {
  return (
    
    
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path="product" element={<Product/>}/>
        
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
