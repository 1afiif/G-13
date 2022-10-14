import React from 'react'
import { useContext } from 'react';
import { PlantApp } from '../../context';
import { Container } from './style'
//3vid 3min
const Navbar = () => {
  const [state,dispatch] = useContext(PlantApp);
  return (
    <Container>
      <div style={{ display: 'flex', gap: '0.5em' }}>
        <Container.LogoIcon />
        <Container.Logo>GreenShop</Container.Logo>
      </div>
      <Container.Link>Home</Container.Link>
      <Container.Link>Shop</Container.Link>
      <Container.IconWrap onClick={() => dispatch({ type: 'basket' })}>
        <Container.Icon />
        <Container.Counter>{state.products.length}</Container.Counter>
      </Container.IconWrap>
    </Container>
  );
}

export default Navbar