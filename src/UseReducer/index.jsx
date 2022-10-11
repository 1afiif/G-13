import React,{useReducer} from 'react'

const UseReducer = () => {
    const [state, dispatch] = useReducer((state, action) => {
        console.log(action);
        switch (action.type) {
            case 'plus': return state + 1
            case 'minus': return state - 1
            default: return state
      }
  },0);

  return (
    <div style={{ flex: 1 }}>
      <h1>UseReducer</h1>
        <button onClick={() => dispatch({type:'plus', payload:{userId:2, name:'Tillo'}})}>+</button>
        <h3>Count: {state}</h3>
        <button onClick={() => dispatch({type:'minus'})}>-</button>
    </div>
  );
}

export default UseReducer