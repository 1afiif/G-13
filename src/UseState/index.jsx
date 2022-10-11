import React,{useState} from 'react'

const UseState = () => {
 const [count, setCount] = useState(0);
 
 const increment = () => {
    setCount(count + 1);
 }
    
    const decrement = () => {
     if(count > 0)
   setCount(count - 1);
 };
  return (
      <div style={{ flex: 1 }}>
      <h1>Usestate</h1>
      <button onClick={increment}>+</button>
      <h4>Count:{count}</h4>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseState