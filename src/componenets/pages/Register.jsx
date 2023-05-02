import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"


function sevice() {

  const link=useNavigate()

  return (
    <div className='reg_div'>
      <div className='comp_div'>
      <div className='reg_user'>
        <h4 className='user_h4'>User name</h4>
        <input className='user_input' type="text" placeholder='Type here...'/>
      </div>
      <div className='reg_pass'>
        <h4 className='pass_h4'>Password</h4>
        <input className='pass_input' type="text" placeholder='Type here...'/>
      </div>
      <div reg_submit>
      <button className='sub_button' onClick={()=>link("/login")}>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default sevice