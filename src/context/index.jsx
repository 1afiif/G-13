import React,{createContext,useReducer} from 'react'
import { reducer } from '../components/Products/reducer';
import { data } from '../data';
export const Productname = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
      mock: data,
    });
  return (
      <Productname.Provider value={[state,dispatch]}>
          {children}
    </Productname.Provider>
  )
}

export default Context