import React, { Component } from 'react'
import {Container,BtnWrap,Btn,Divider,InputWrap} from '../LoginPage/style'
class RegisterPage extends Component {
  render() {
    return (
      <Container>
        <BtnWrap>
          <Btn onClick={() => this.props.changePage('login')}>Login</Btn>
          <Divider></Divider>
          <Btn
            color=' #00b300'
            onClick={() => this.props.changePage('register')}
          >
            Register
          </Btn>
        </BtnWrap>
        <InputWrap>
          <p>Enter your username and password to login.</p>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Enter your email address' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          <button
            style={{ margin: '2em 0' }}>
            Register
          </button>
          <p style={{marginBottom:'10em;'}}>Or register with</p>
        </InputWrap>
      </Container>
    );
  }
}

export default RegisterPage