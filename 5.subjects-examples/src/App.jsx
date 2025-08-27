import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Items from './pages/Items'
import Header from "./components/Header"
import Category from "./components/Category"
import ItemDetails from "./pages/ItemDetails"
import Basket from "./components/Basket"
import { useState, useEffect } from "react"
import { items } from "./components/Data"
import SearchPage from "./components/SearchPage"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [basket, setBasket] = useState([]);

useEffect(()=>{
        if (searchTerm.trim()) {
        setIsOpen(true)
     }
     else {
        setIsOpen(false)
     }
     },[searchTerm])
  

  const addToBasket = (item) => {
    const existingItem = basket.find((b) => b.id === item.id)

    if (existingItem){
    setBasket(
      basket.map((b) =>
        b.id === item.id ? {...b, quantity: b.quantity + 1 } :b
      )
    );
  }
  else {
    setBasket ([...basket , {...item, quantity: 1}]);
  }  
  };
  
  return (
    <BrowserRouter>
    <Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
    <Basket basket={basket} setBasket={setBasket} searchTerm={searchTerm}/>
    {isOpen && (<SearchPage searchTerm={searchTerm} addToBasket ={addToBasket} setIsOpen={setIsOpen} />)}
    <Category addToBasket={addToBasket}/>
     <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/item-details/:id' element={<ItemDetails addToBasket={addToBasket}/>}/>
      <Route path='items' element={<Items addToBasket={addToBasket}/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
