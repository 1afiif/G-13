import styled from 'styled-components'
import { ReactComponent as Vector } from '../../assets/Vector.svg'
import { ReactComponent as Houzing } from '../../assets/Houzing.svg'

export const Vecto = styled(Vector)``
export const Houzin = styled(Houzing)`margin-top:0.6em;`

export const MainContainer = styled.div`
  background: #0d263b; 
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled.div`
display: flex;
gap: 0.4rem;
`

export const TextContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:white;
font-style: normal;
font-size: 16px;
line-height: 24px;
display: flex;
gap:6em;
`