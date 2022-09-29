import React from 'react'
import { Container, InputWrap, Wrap } from './style'

export const Navbar = () => {
  return (
      <Container>
          <Wrap>
              <InputWrap>
                  <InputWrap.Input type={'text'} placeholder={'Search...'} />
                  <InputWrap.Icon/>
              </InputWrap>
          </Wrap>
          <Wrap>Wrap2</Wrap>
      </Container>
  )
}

export default Navbar