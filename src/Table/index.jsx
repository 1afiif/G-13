import React from 'react'
import { Container,InputWrapper,Search,Title,Selection, DataWrapper } from './style'
import Data from '../data.js'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language:Data
        }
    }
    render() {
        return (
            <Container>
                <Title>React JS</Title>
                <InputWrapper>
                <Search
                type='text'    
                placeholder='Search...' />
                <Selection>
                <option value="id">ID</option>       
                <option value="name">Name</option> 
                </Selection>
                </InputWrapper>
                <DataWrapper>
                <table>
                <tbody>
                {
                this.state.language.map(({id,name}) => {
                return(
                <tr>
                <td>{id}</td>
                <td>{name}</td>
                </tr>
                )
                })
                }
                </tbody>
                </table>
                </DataWrapper>
            </Container>
        )
    }
}
export default Table