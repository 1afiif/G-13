import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Home from '../components/Home'
// import Products from '../components/Products'
// import About from '../components/About'
// import Login from '../components/Login'
import NotFound from '../components/NotFound'
// import ProductDetail from '../components/ProductDetail'
import { navbarData } from '../utils/navbarData'

const Root = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <Routes>
       <Route element={<Navbar/>}>
        {
            navbarData.map(({ id, path, element, title, isPrivate, hidden }) => {
              if (!isPrivate) {    
                return (
                  <Route key={id} path={path} element={element}/>
              )
              } else {
                return(
                  <Route key={id} path={path} element={isPrivate ? <Navigate to='/login' /> : element} />
                )
              }
          })
        }
        {/* <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={token ? <Products/> : <Navigate to='/login'/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/> */}
        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <button onClick={() => localStorage.removeItem('token')}>Logout</button>
    </>
  );
}

export default Root