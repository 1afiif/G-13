import React from 'react'
import { Container,Card } from './style'
import {data} from '../../data'
const Body = () => {
  return (
      <Container>
          {
              data.map((value) => {
                  console.log(value);
                  return <Card key={value.id}>
                      <Card.Img
                          src={value.url}
                          alt='data' />
                      <Card.Name>{value.name}</Card.Name>
               </Card>
           }) 
          }
      </Container>
  )
}

export default Body