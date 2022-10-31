import React, { useState } from 'react'
import { Route, Routes,Navigation, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Products from '../components/Products'
import About from '../components/About'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

const Root = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Routes>
       <Route element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={token ? <Products/> : <Navigate to='/login'/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <button onClick={() => localStorage.removeItem('token')}>Logout</button>
    </>
  );
}

export default Root