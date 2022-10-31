import React, { useRef } from 'react';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const login = () => {
    localStorage.setItem('token', JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  }
  return (
    <div>
      <input ref={emailRef} type="text" placeholder='Email'/>
      <input ref={passwordRef} type="text" placeholder='Password' />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
