import React, { useRef } from 'react'

const Uncontrolled = () => {
  const name = useRef('');
  const surName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const regBtn = () => {
   console.log(name.current.value);
   console.log(surName.current.value);
   console.log(email.current.value);
   console.log(password.current.value);
  }
  return (
    <div style={{ flex: '1' }}>
      <h1>Uncontrolled</h1>
      <div>
        <input ref={name} type="text" placeholder='Name' />
        <input ref={surName} type="text" placeholder='SurName' />
        <input ref={email} type="text" placeholder='Email' />
        <input ref={password} type="text" placeholder='Password' />
        <button onClick={regBtn}>Register</button>
      </div>
    </div>
  );
}

export default Uncontrolled
