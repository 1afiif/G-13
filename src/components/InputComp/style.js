import styled from 'styled-components'
import { ReactComponent as Address } from '../../assets/Address.svg'
import { ReactComponent as Search } from '../../assets/Search.svg'

const Addres = styled(Address)`
position: absolute;
left:5.5em;
`

const Searc = styled(Search)`
margin-right: 1em;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 8px;
  justify-content: space-around;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 39px;
    outline: none;
    border: 1px solid #0061df;
    border-radius: 2px;
    background: #0061df;
    color: white;
    :active{
        transform: scale(0.98);
    }
  }
`;

const Input = styled.input`
  height: 40px;
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: 3.5em;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #0d263b;
`;

export { Block,Addres,Searc,Input };