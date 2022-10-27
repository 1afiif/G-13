import React from 'react'
import { Container, Login, Logo, NavItem, NavItems } from './style';
const Navbar = () => {
  return (
    <Container>
      <NavItem to={'/lgo'}>
        <Logo>Logo</Logo>
      </NavItem>
      <NavItems>
        <NavItem activeStyle={{ color: 'crimson' }} to='/home'>
          Home
        </NavItem>
        <NavItem activeStyle={{ color: 'crimson' }} to='/products'>
          Products
        </NavItem>
        <NavItem activeStyle={{ color: 'crimson' }} to='about'>
          About
        </NavItem>
      </NavItems>
      <Login>Login</Login>
    </Container>
  );
}

export default Navbar
