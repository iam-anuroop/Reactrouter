import React from 'react'
import "./Notfound.css"
import { useNavigate } from 'react-router-dom'


function Notfound() {

  const link=useNavigate()

  return (
    <div className='not_div'>
      <h1 className='not_h1'>Page not found...</h1>
      <button onClick={()=>link("/")} className='goback'>Go Back</button>
    </div>
  )
}

export default Notfound