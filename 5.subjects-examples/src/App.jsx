import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Items from './pages/Items'
import Header from "./components/Header"
import Category from "./components/Category"
import ItemDetails from "./pages/ItemDetails"
import Basket from "./components/Basket"
import { useState } from "react"
import { items } from "./components/Data"

function App() {
  const [basket, setBasket] = useState([]);
  

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
    <Header/>
    <Basket basket={basket}
    setBasket={setBasket}/>
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
