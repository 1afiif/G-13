import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Nav } from './style'
import { navbarData } from '../../utils/navbarData'
const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavLink style={({ isActive }) => { return { color: isActive ? 'crimson' : 'white' } }} className={'nav-item'} to={'/'}>Logo</NavLink>
     {
       navbarData.map(({id, path, title, hidden}) => {
         return !hidden &&(
           <NavLink key={id} style={({ isActive }) => { return { color: isActive ? 'crimson' : 'white' } }} className={'nav-item'} to={path}>{title}</NavLink>
         )
       })
      }
     </Nav>
      <Outlet/>
    </Container>
  )
}

export default Navbar
