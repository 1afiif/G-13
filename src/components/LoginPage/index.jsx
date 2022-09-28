import React, { Component } from 'react'
import { Btn, BtnWrap, Container, Divider, InputWrap, LineWrap } from '../LoginPage/style'

class LoginPage extends Component {

  render() {
    return (
      <Container>
        <BtnWrap>
          <Btn color=' #00b300' onClick={() => this.props.changePage('login')}>
            Login
          </Btn>
          <Divider></Divider>
          <Btn onClick={() => this.props.changePage('register')}>Register</Btn>
        </BtnWrap>
        <InputWrap>
          <p>Enter your username and password to login.</p>
          <input type='text' placeholder='almamun_uxui@outlook.com' />
          <input type='password' placeholder='Password' />
          <p style={{ color: '#008000', marginLeft: '12em' }}>
            Forgot Password?
          </p>
          <button>Login</button>
            <h2>
              <span>Or login with</span>
            </h2>
        </InputWrap>
      </Container>
    );
  }
}

export default LoginPage