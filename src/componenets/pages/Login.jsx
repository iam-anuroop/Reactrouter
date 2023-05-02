import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"


function Login() {

  const link=useNavigate()

  return (
    <div className='login_div'>
      <h1 className='login_h1'>Successfully registered...</h1>
      <button className='done_buton' onClick={()=>link("/")}><i class="fa-solid fa-circle-check"></i></button>
    </div>
  )
}

export default Login