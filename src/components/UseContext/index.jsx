import React, { useContext } from 'react'
import { StudentsContext } from '../../context';


const UseContext = () => {
  const [state, setState] = useContext(StudentsContext);
  const Delete = (id) => {
    let result = state.filter((value) => value.id !== id);
    setState(result);
  }
  return (
    <div>
      <h4>UseContext</h4>
      {
        state.map(value => (
          <div key={value.id}>
            <p>{value.id} {value.name} <button onClick={() => Delete(value.id)}>Delete</button></p>
          </div>
        ))
      }
    </div>
  )
}

export default UseContext