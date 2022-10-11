import React,{useReducer} from 'react'
import {data} from '../data';

const UseReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
      console.log(state,action)
  }, {
    mock:data
  });
  return (
    <div style={{ flex: 1 }}>
      <h1>UseReducer</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state.mock.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value?.id}</td>
                <td>{value?.name}</td>
                <td>{value?.status}</td>
                <td><button onClick={() => dispatch({type:'delete',payload:value.id})}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UseReducer