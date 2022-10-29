import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Nav } from './style'
const Navbar = () => {
  return (
    <Container>
     <Nav>
      <NavLink style={({isActive}) => {return {color:isActive ? 'crimson' : 'white'}}} className={'nav-item'} to={'/'}>LOGO</NavLink>
      <NavLink style={({isActive}) => {return {color:isActive ? 'crimson' : 'white'}}} className={'nav-item'} to={'/home'}>Home</NavLink>
      <NavLink style={({isActive}) => {return {color:isActive ? 'crimson' : 'white'}}} className={'nav-item'} to={'/products'}>Products</NavLink>
      <NavLink style={({isActive}) => {return {color:isActive ? 'crimson' : 'white'}}} className={'nav-item'} to={'/about'}>About</NavLink>
      <NavLink style={({isActive}) => {return {color:isActive ? 'crimson' : 'white'}}} className={'nav-item'} to={'/login'}>LOGIN</NavLink>
     </Nav>
      <Outlet/>
    </Container>
  )
}

export default Navbar
