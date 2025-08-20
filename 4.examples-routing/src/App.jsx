import {BrowserRouter, Routes, Route} from "react-router-dom" // kütüphaneyi, yükledikten sonra import ediyoruz.
import './App.css'
import Home from './pages/Dashboard/Home'
import Users from './pages/Dashboard/Users'
import Contact from './pages/Dashboard/Contact'
import UserDetail from "./pages/Dashboard/UserDetail"
import Login from "./pages/Auth/Login"
import DashboardLayout from "./layouts/dashboard/DashboardLayout"
import AuthLayout from "./layouts/auth/AuthLayout"
import Register from "./pages/Auth/Register"

function App() {
 
// BrowserRouter altında çağırılan menu tüm sayfalarda erişilebilir oldu.

  return (
   <BrowserRouter> 
     <Routes>
       <Route path="/" element={<DashboardLayout/>}>
         <Route index element={<Home/>} />
         <Route path='users' element={<Users/>}/>
         <Route path='users/:id' element={<UserDetail/>}/>
         <Route path='contact' element={<Contact/>}/>
       </Route>
       <Route path="auth" element={<AuthLayout/>}>
       <Route  index element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
