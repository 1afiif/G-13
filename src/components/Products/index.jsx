import React, { useContext } from 'react';
import { PlantApp } from '../../context';
import AddedProducts from '../AddedProducts';
import { Container } from './style'

const Products = () => {
  const [state, dispatch] = useContext(PlantApp);
  return (
    <Container>
      <Container.Title>Products</Container.Title>
      {
        state.basket ? ( <AddedProducts/> ) : (
          <Container.Wrapper>
          {
          state?.mock?.map((value) => {
          return (
            <Container.Card key={value.id}>
              <Container.ImgWrap>
              <img src={value.img} alt='' />
              </Container.ImgWrap>
              <Container.CardText>
              <h5>{value.title}</h5>
              <div>
              <h4>${value.price}.00</h4>
              <button onClick={() => dispatch({type:'add',payload:{id:value.id}})}>Add To Cart</button>
              </div>
              </Container.CardText>
            </Container.Card>
            );
          })
            }  
          </Container.Wrapper>
  )
          }
    </Container>
  )
}

export default Products