import React, { createContext, useReducer } from 'react';
import { data } from '../utilities/data';
import { reducer } from '../context/reducer';

export const PlantApp = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    // mock: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : data,
    mock:data,
    // products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    products:[],
    basket:false 
  },)

  // localStorage.setItem('data', JSON.stringify(state.mock));
  // localStorage.setItem('products', JSON.stringify(state.products));

  return (
    <PlantApp.Provider value={[state,dispatch]}>
        {children}
    </PlantApp.Provider>
  )
}

export default Context