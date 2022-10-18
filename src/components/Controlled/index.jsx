import React,{useState} from 'react'

const Controlled = () => {
  const [state, setState] = useState('');

  const trackChange = (e) => {
    setState(e.target.value);
  };
    console.log(state,'state')
  return (
    <div style={{ flex: '1' }}>
      <h1>Controlled {state}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <input type='text' onChange={trackChange} placeholder='Name' />
      </div>
    </div>
  );
};
export default Controlled
