import React,{useContext} from 'react'
import { StudentsContext } from '../../context'

const Navbar = () => {
  const [state] = useContext(StudentsContext);

  return (
    <div>
      <h4>Navbar Count: {state.length}</h4>
    </div>
  )
}

export default Navbar