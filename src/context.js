import React, { createContext, useState } from 'react';
import { data } from './data';

export const MovieList = createContext();

const Context = ({ children }) => {
    const [movieData, setmovieData] = useState(data);

  return (
      <MovieList.Provider value={[movieData,setmovieData]}>
          {children}
    </MovieList.Provider>
  )
}

export default Context