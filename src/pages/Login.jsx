import React from 'react'
import Add from "../img/add.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo"> lama chat</span>
        <span className="title"> Register</span>
            <form>
                <input type ="email" placeholder='Email'/>
                <input type ="password" placeholder='Password'/>
                <button>Sign in</button>
            </form>
            <p>you don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login