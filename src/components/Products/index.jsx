import React, { useState } from 'react'
import { data } from '../../data';
import { Container } from './style'

const Products = () => {
  const [state,setState] = useState(data);
    let total = 0;

    const OnChecked = (e,id) => {
      console.log(e.target.checked, id,'checkbox')
  }
  return (
    <Container>
      <Container.Wrapper>
        <Container.Input type={'text'} placeholder='Add an Item ...' />
        <Container.Icon/>
      </Container.Wrapper>
      <Container.Fruits>
        {
    state.map((value) => {
        total += value.quantity;
     return(
        <Container.Block key={value.id}>
             <Container.Checkbox
                 type='checkbox'
                 onChange={(e) => OnChecked(e,value.id)}
             />
            <Container.Title>{value.name}</Container.Title>
            <Container.Box>
                 <Container.Plus />
                 <Container.Count>{value.quantity}</Container.Count>
                 <Container.Minus/>
            </Container.Box>
        </Container.Block>
     )
    })
        }
        <Container.Total>Total: {total}</Container.Total>
      </Container.Fruits>
    </Container>
  );
}

export default Products
