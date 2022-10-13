import React from 'react'
import { Container } from './style'

const Navbar = () => {
  return (
    <Container>
      <div style={{display:'flex', gap:'0.5em'}}>
        <Container.LogoIcon/>
        <Container.Logo>GreenShop</Container.Logo>
      </div>
      <Container.Link>Home</Container.Link>
      <Container.Link>Shop</Container.Link>
      <Container.IconWrap>
        <Container.Icon/>
        <Container.Counter>10</Container.Counter>
      </Container.IconWrap>
    </Container>
  );
}

export default Navbar