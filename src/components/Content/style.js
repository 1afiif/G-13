import styled from 'styled-components'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Google } from '../../assets/google.svg'
import { ReactComponent as Linked } from '../../assets/linkedin.svg'

export const Faceboo = styled(Facebook)``
export const Googl = styled(Google)``
export const LinkedIn = styled(Linked)``

export const MainContainer = styled.div`
display: flex;
gap:3em;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
border:1px solid black;
width: 30vw;
height:33em;
margin-top:6em;
border-radius: 0.7em;

`

export const Title = styled.div`
margin: 2em;
font-size: 1.2em;
font-weight: bolder;
`
export const Form = styled.form`
margin: 2.2em;
display: flex;
flex-direction: column;
gap: 0.5em;
`

export const Input = styled.input`
height:4vh;
`

export const Button = styled.button`
  background-color: #FF297E;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-style: none;
  margin-left: 2.5em;
  width:25vw;
  height: 5.5vh;
  cursor: pointer;
`

export const Icon = styled.div`
margin: 2.2em;
display: flex;
align-items: center;
justify-content: center;
gap:4em;
`
