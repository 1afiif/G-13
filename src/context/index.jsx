import React,{createContext,useReducer} from 'react'
import { data } from '../data';
import { reducer } from '../UseReducer/reducer';

export const StudentsContext = createContext();

const Context = ({ children }) => {
     const [state, dispatch] = useReducer(reducer,
    {
      mock: localStorage.getItem('mock') ? JSON.parse(localStorage.getItem('mock')) : data,
      selected: 'name',
      Id: null,
      name: '',
      status: '',
    }
  );
  localStorage.setItem('mock', JSON.stringify(state.mock));
  return (
      <StudentsContext.Provider value={[state,dispatch]}>
          {children}
    </StudentsContext.Provider>
  )
}

export default Context