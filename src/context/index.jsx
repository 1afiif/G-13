import React, { createContext, useReducer } from 'react';
import { data } from '../utilities/data';
import { reducer } from '../context/reducer';

export const PlantApp = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer ,{
    mock: data,
    products:[],
    basket:false 
  },)
  return (
    <PlantApp.Provider value={[state,dispatch]}>
        {children}
    </PlantApp.Provider>
  )
}

export default Context