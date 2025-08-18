import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

// react-router-dom nedir ? 
// Sayfalar arasındaki geçişi yapmak için kullanılan bir kütüphanedir.Kullanımı aşağıdaki gibidir.
// BrowserRouter, sayfa yönlendirmelerini tutan ana bileşendir.
// Routes, adresi verilen sayfanın görüntülenmesini sağlar.
// Route, bir sayfayı uygulamaya eklemek için kulanılır.
// Link, sayfaya link vermek için kullanılan bileşendir.Sayfa adresinini alır.Kullanımı HTML a etiketi gibidir.
// Link bileşeninde , a etiketi gibi sayfa yenilenmez ve css yazarken link bileşeni a etiketi adıyla kullanılır.

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>   
    </Routes>
    </BrowserRouter>
  )
}

export default App
