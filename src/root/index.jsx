import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Login from '../components/Login'
const Root = () => {
  return (
    <>
      <Routes>
       <Route element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
       </Route>
      </Routes>
    </>
  );
}

export default Root