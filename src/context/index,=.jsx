import React,{createContext} from 'react'

let Todolist = createContext();


const Context = ({children}) => {
  return (
    <Todolist.Provider>Context</Todolist.Provider>
  )
}

export default Context