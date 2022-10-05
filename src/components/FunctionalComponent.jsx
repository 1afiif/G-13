import React,{ useState } from 'react'

const FunctionalComponent = (props) => {
    const [state, setState] = useState({
        name: '',
        count:0
    });
    const setValue = e => {
        const { value } = e.target;
        setState({...state, name: value });
    }

    const increment = () => {
        setState({...state, count: state.count + 1});
    }

    const decrement = () => {
        if(state.count > 1)
        setState({ ...state, count: state.count - 1 });
    }
    
    // 3 video 16minut
    return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        gap: '2em',
        margin: '1em 2em',
      }}
      >
     <h1>{props.title} Component</h1>
     <input type="text" onChange={setValue} value={state.name}/>
     <h3>Name: {state.name}</h3>
     <button onClick={increment}>+</button>
     <h4>Count: {state.count}</h4>
     <button onClick={decrement}>+</button>
    </div>
  );
}

export default FunctionalComponent
