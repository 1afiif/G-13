import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { Container } from './style'
import Body from '../Body'

const Root = () => {
  return (
    <Container>
      <Sidebar />
      <div style={{width:'100%'}}>
      <Navbar />
      <Body/>
      </div>
    </Container>
  )
}

export default Root

