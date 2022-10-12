import { createContext, useState } from "react";

export const StudentsContext = createContext();

const Context = ({children}) => {
    const [state, setState] = useState([
        {id:1,name:'Alijon', status:'Student'},
        {id:2,name:'Alisher', status:'Logistics'},
        {id:3,name:'Hoji', status:'Reciptionist'},
    ])
    return (
        <StudentsContext.Provider value={[state,setState]}>
            {children}
        </StudentsContext.Provider>
    )
}

export default Context