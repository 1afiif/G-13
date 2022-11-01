import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../utils/data'
import { Container, ContainerProd } from './style'

const Products = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Container.Title>Products</Container.Title>
      <ContainerProd>
        {
          data.map(({ id, title, price }) => {
            return (      
          <ContainerProd.Item key={id} onClick={() => navigate(`/products/:${id}`)}>
            <ContainerProd.ImgWrapper></ContainerProd.ImgWrapper>
            <ContainerProd.Title>{title}</ContainerProd.Title>
            <ContainerProd.Title>${price}</ContainerProd.Title>
          </ContainerProd.Item>
            )
          })
        }
      </ContainerProd>
    </Container>
  )
}

export default Products
