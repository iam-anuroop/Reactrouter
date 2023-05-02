import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"




function Home() {
  const link=useNavigate()
  return (
    <div className='home_div'>
      <h1 className='home_h1'>welcome...</h1>
      <h2 className='home_h2' onClick={()=>link("/register")}>Click here to register</h2>
    </div>
  )
}

export default Home