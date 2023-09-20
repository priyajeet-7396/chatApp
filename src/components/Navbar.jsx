import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Synchat</span>
    <div className='user'>
      <img src='https://images.pexels.com/photos/18185493/pexels-photo-18185493/free-photo-of-fashion-man-people-relaxation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
      <span>john</span>
      <button onClick={()=>signOut(auth)}>Logout</button>


    </div>
    </div>
  )
}

export default Navbar