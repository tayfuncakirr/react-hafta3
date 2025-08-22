import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Slide from './pages/Slide'
import Items from './pages/Items'
import Header from "./components/Header"
import Category from "./components/Category"
import ItemDetails from "./pages/ItemDetails"

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Category/>
     <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/item-details/:id' element={<ItemDetails/>}/>
      <Route path='items' element={<Items/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
