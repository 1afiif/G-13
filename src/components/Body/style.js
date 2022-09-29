import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
const Card = styled.div`
width: 350px;
height: 300px;
margin: 20px 0px;
`

Card.Img = styled.img`
width: 100%;
height: 250px;
`

Card.Name = styled.p`
font-weight: 400;
font-size: 20px;
color:white;
`

export {Container,Card}