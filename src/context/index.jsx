import React,{createContext} from 'react'

export const Content = createContext();

const Context = ({children}) => {
  return (
    <Content.Provider>
        {children}
    </Content.Provider>
  )
}

export default Context