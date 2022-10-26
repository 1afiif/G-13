import React from 'react'
import { Container, Login, Logo, NavItem, NavItems } from './style';

const Navbar = () => {
  return (
    <Container>
        <Logo>Logo</Logo>
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>About</NavItem>
          </NavItems>
          <Login>Login</Login>
    </Container>
  );
}

export default Navbar
