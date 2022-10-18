import React, { useCallback, useMemo,useState } from 'react'
import Child from '../Child'

const Parent = () => {
  console.log('Parent')
  const [state,setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
    const decrement = () => {
      if (state > 0)
      setState(state - 1);
    };

    const name = useCallback((param) => {
        return {name: `Hi from ${param}`};
    },[])
  return (
    <div>
        <h1>Parent</h1>
        <h4>Count: {state}</h4>
        <button onClick={increment}>+</button>       
        <button onClick={decrement}>-</button>       
        <Child name={name}/>
    </div>
  )
}

export default Parent