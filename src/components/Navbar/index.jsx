import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PlantApp } from '../../context';
import { Container } from './style'

const Navbar = () => {
  const [state,dispatch] = useContext(PlantApp);
  return (
    <Container>
      <div style={{ display: 'flex', gap: '0.5em' }}>
        <Container.LogoIcon />
        <Container.Logo>GreenShop</Container.Logo>
      </div>
      <NavLink to={'/products'} style={{ textDecoration: 'none' }}>
        <Container.Link>Home</Container.Link>
      </NavLink>
      <NavLink to={'/AddedProducts'} style={{ textDecoration: 'none' }}>
        <Container.Link>Shop</Container.Link>
      </NavLink>
      <NavLink to={'/AddedProducts'}>
        <Container.IconWrap onClick={() => dispatch({ type: 'basket' })}>
          <Container.Icon />
          <Container.Counter>{state.products.length}</Container.Counter>
        </Container.IconWrap>
      </NavLink>
    </Container>
  );
}

export default Navbar