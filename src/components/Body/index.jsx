import React, { useContext } from 'react'
import { MovieList } from '../../context'
import { Container,Card } from './style'

const Body = () => {
    const { movieData, type } = useContext(MovieList);
    return (
      <Container>
          {
              movieData.filter((val) => type === 'All' ? true : val.type === type).map((value) => {
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