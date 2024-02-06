import { useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/AdminDashboard/SignUp'
import SignIn from './pages/SignIn'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import SideBar from './pages/AdminDashboard/SideBar'
import Dashboard from './pages/AdminDashboard/Dashboard'

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}>
    <Route index element={<Home/>}/>
    <Route path='signin' element={<SignIn/>}/>
    <Route path='signup' element={<SignUp/>}/>
    <Route element={<Footer/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter> */}
    <Dashboard/>   
    </>
  )
}

export default App
