import React, { Component } from 'react'
import Button from '../Button'
import { Container, Header, Navbar } from './style'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
const DarkLightMode = createGlobalStyle`
 body {
    background: ${(props) => props.theme.bg};
    color:${(props) => props.theme.color}
 }
 `

class Mode extends Component {
    constructor(props) {
    super(props);
    this.state = {
        mode:false
    }
    }
    render() {
    
    const onClick = () => {
        this.setState({ mode: !this.state.mode });
        console.log(this.state.mode);
    }
    
    const theme = {
        bg: this.state.mode ? 'black' : 'white',
        color:this.state.mode ? 'white' : 'black'
    }
    return (
    <ThemeProvider theme={theme}>
      <DarkLightMode/>
      <Container>
        {/* ------- Navbar -------- */}
        <Navbar>
          <Navbar.Title>Greenshop</Navbar.Title>
          <Navbar.UL>
            <Navbar.LI>Home</Navbar.LI>
            <Navbar.LI>Shop</Navbar.LI>
          </Navbar.UL>
          <Button>Login</Button>
        </Navbar>

        {/* ------- Navbar -------- */}

        {/* ------- Header -------- */}
        <Header>
          <Header.Title>Let's Make a Better Planet</Header.Title>
        </Header>

        {/* ------- Header -------- */}
        
        <Button onClick={onClick}>
        {this.state.mode ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Container>
    </ThemeProvider>
    );
  }
}

export default Mode
