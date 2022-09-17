import React from 'react'
import { Houzin, IconContainer, MainContainer, TextContainer, Vecto } from './style'

const Navbar = () => {
  return (
    <MainContainer>
          <IconContainer>
              <Vecto />
              <Houzin/>
          </IconContainer>
      <TextContainer>
        <p>Home</p>
        <p>Properties</p>
        <p>Contacts</p>
          </TextContainer>
    </MainContainer>
  )
}

export default Navbar
