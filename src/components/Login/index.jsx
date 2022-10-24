import React, { useRef } from 'react'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  
  const getData = () => {
      fetch('https://houzing-app.herokuapp.com/api/public/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      })
        .then((response) => response.json())
        .then((response) =>
          localStorage.setItem('token', response?.authenticationToken)
        );
    
  }
  
  const login = () => {
    console.log(emailRef.current.value, passwordRef.current.value);
      getData();
  } 
  return (
    <div>
    <h3>Login</h3>
    <div style={{display:'flex',flexDirection:'column',width:'400px',gap:'2em'}}>
     <input ref={emailRef} type='email' placeholder='email' />
     <input ref={passwordRef} type='password' placeholder='Password' />
     <button onClick={login}>Login</button>
    </div>
    </div>
  );
}

export default Login
