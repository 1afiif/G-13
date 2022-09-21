import styled from 'styled-components'

export const Container = styled.div`
width: 200px;
height: 40px;
background-color: crimson;
display: flex;
justify-content: center;
align-items: center;
color:white;
font-weight: 600;
font-size: 24px;
transition: transform .3s ease-in-out;
margin-bottom: 10px;
:active{
    transform: scale(0.80);
}
`

