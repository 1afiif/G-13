import React from 'react'
import { Container,Img } from './style'
export const Body = ({fruit}) => {
  return (
      <Container>
          {
              fruit.map((value) => {
                  return <div key={value?.id}>
                      <h1>{value?.name}</h1>
                      <Img src={value?.img}/>
                  </div>
            })  
          }
    </Container>
  )
}

export default Body