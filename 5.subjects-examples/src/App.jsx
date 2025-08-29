import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Items from './pages/Items'
import Header from "./components/Header"
import Category from "./components/Category"
import ItemDetails from "./pages/ItemDetails"
import Basket from "./components/Basket"
import { useState, useEffect } from "react"
import SearchPage from "./components/SearchPage"
import Contact from "./pages/Contact"

 function Layout ({children, basket, setBasket, searchTerm,isOpen, setIsOpen, setSearchTerm, addToBasket}) {
  const location = useLocation();
  return (
    <>
    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     {isOpen && (
            <SearchPage
              searchTerm={searchTerm}
              addToBasket={addToBasket}
              setIsOpen={setIsOpen}
            />
          )}

    {location.pathname !== "/contact" && (
      <>
      <Basket basket={basket} setBasket={setBasket} searchTerm={searchTerm}/>
      <Category addToBasket={addToBasket}/>
      </>
    )}
    {children}
    </>
  )
 }

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
      <Layout
        basket={basket}
        setBasket={setBasket}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        addToBasket={addToBasket}
        isOpen= {isOpen}
        setIsOpen= {setIsOpen} >
     <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/item-details/:id' element={<ItemDetails addToBasket={addToBasket}/>}/>
      <Route path='/items' element={<Items addToBasket={addToBasket}/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </Layout>
    </BrowserRouter>
  )
}

export default App
/*<Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
    <Basket basket={basket} setBasket={setBasket} searchTerm={searchTerm}/>
    {isOpen && (<SearchPage searchTerm={searchTerm} addToBasket ={addToBasket} setIsOpen={setIsOpen} />)}
    <Category addToBasket={addToBasket}/>*/ 