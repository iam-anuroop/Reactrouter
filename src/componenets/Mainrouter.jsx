import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import { Routes,Route } from 'react-router-dom'


function Mainrouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/*" element={<Notfound/>} />
        </Routes>
    </div>
  )
}

export default Mainrouter