import React, { createContext, useState } from 'react';
import { data } from './data';

export const MovieList = createContext();

const Context = ({ children }) => {
  const [movieData, setmovieData] = useState(data);
  const [type, setType] = useState('All');

  return (
      <MovieList.Provider value={{movieData,setmovieData,type,setType}}>
          {children}
    </MovieList.Provider>
  )
}

export default Context