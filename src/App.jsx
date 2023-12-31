import React from 'react'
import Register from './pages/Register'
import { useContext } from "react";
import "./style.scss"
import Login from './pages/Login'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from './context/Authcontext'

const App = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element = {<Home/>}/>
        <Route path= "login"  element = {<Login/>}/>
        <Route path= "register"  element = {<Register/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App