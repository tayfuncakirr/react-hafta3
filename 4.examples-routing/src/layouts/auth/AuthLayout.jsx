import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className="auth-menu">
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt ol</Link>
      </div>
        <hr />
        <Outlet/>
    </div>
  )
}

export default AuthLayout