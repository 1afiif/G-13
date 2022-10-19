import React, { useRef, useState } from 'react'
import { Btn, BtnWrap, Container, Facebook, InputWrap,Google } from './style'

const Login = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    
    const nameVal = useRef('');
    const surNameVal = useRef('');
    const emailVal = useRef('');
    const passwordVal = useRef('');

    const valueLog = () => {
        setName(nameVal.current.value )
        setSurname(surNameVal.current.value )
        setEmail(emailVal.current.value )
        setPass(passwordVal.current.value)
    }
  return (
    <Container>
      <BtnWrap>
        <Btn color=' #00b300' onClick={() => this.props.changePage('login')}>
          Login
        </Btn>
      </BtnWrap>
      <InputWrap>
        <p>Enter your username and password to login.</p>
        <input ref={nameVal} type='text' placeholder='Name' />
        <input ref={surNameVal} type='text' placeholder='Surname' />
        <input ref={emailVal} type='text' placeholder='Email' />
        <input ref={passwordVal} type='text' placeholder='Password' />
        <p style={{ color: '#008000', marginLeft: '12em' }}>Forgot Password?</p>
        <button onClick={valueLog}>Login</button>
        <h2>
          <span>Or login with</span>
        </h2>
        <button
          style={{
            background: 'white',
            color: '#527a7a',
            borderColor: '#527a7a',
            cursor: 'pointer',
            border: '2px solid #d1e0e0',
          }}
        >
          <Google /> Login with Google
        </button>
        <button
          style={{
            background: 'white',
            color: '#527a7a',
            borderColor: '#527a7a',
            cursor: 'pointer',
            border: '2px solid #d1e0e0',
          }}
        >
          <Facebook /> Login with Google
        </button>
      <h2 style={{borderBottom:'none',fontSize:'18px'}}>Input Name Value : {name}</h2>
      <h2 style={{borderBottom:'none',fontSize:'18px'}}>Input Surname Value : {surname}</h2>
      <h2 style={{borderBottom:'none',fontSize:'18px'}}>Input Email Value : {email}</h2>
      <h2 style={{borderBottom:'none',fontSize:'18px'}}>Input Password Value : {password}</h2>
      </InputWrap>
    </Container>
  );
  }

export default Login
