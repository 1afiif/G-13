import styled from 'styled-components'
import { ReactComponent as Tras } from '../assets/icon.svg'

export const Trash = styled(Tras)``
export const Container = styled.div`
width: 1200px;
/* height: 600px; */
margin: auto;
margin-top: 80px;
border-radius: 3px;
background-color: #FFFEFF;
color:black;
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 24px;
flex-direction: column;
padding: 15px;
`

export const Title = styled.h3`
font-size: 30px;
`

export const Search = styled.input`
width: 100%;
height: 40px;
outline: none;
border: 1px solid #5555;
padding-left: 8px;
`

export const InputWrapper = styled.div`
display:flex;
align-items: center;
width: 100%;
gap:10px;
margin-top: 30px;
`

export const Selection = styled.select`
height: 40px;
`

export const DataWrapper = styled.div`
width: 100%;
margin-top: 20px;
`

export const TableContent = styled.table`
width: 100%;
`

export const Button = styled.button`
  width: 200px;
  outline: none;
  border: none;
  margin: 10px;
  height: 40px;
  background-color: crimson;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 10px;
  :active {
    transform: scale(0.8);
  }
`;

export const AddWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-top: 20px;
justify-content: center;
gap: 10px;
`

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: crimson;
  color: white;
  outline: none;
  border: none;
  :active {
    transform: scale(0.9);
  }
`;
