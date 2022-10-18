import React, { useRef } from 'react'

const Uncontrolled = () => {
  const state = useRef('');
  console.log(state,'uncontrolled');
  return (
    <div style={{ flex: '1' }}>
      <h1>Uncontrolled</h1>
      <div>
              <input ref={state} type="text" placeholder='Name' />
              <button>Register</button>
      </div>
    </div>
  );
}

export default Uncontrolled
