import styled from 'styled-components'
import { ReactComponent as search } from '../../assets/search.svg'
const Container = styled.div`
background: red;
color:white
` 
const Wrap = styled.div`
height: 70px;
color:white;
display: flex;
align-items: center;
background: #212121;
border-bottom: 2px solid rgba(255,255,255,0.2);
`
const InputWrap = styled.div`
display: flex;
align-items: center;
background: rgba(255,255,255,0.2);
margin: 0px auto;
`
InputWrap.Input = styled.input`
  width: 400px;
  height: 32px;
  outline: none;
  border: none;
  background: black;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0px 0px 2px;
  padding-left: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
`;

InputWrap.Icon = styled(search)``

export {Container,Wrap,InputWrap}