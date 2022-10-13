import React, { useContext } from 'react';
import { Productname } from '../../context';
import { Container } from './style';

const Products = () => {
  const [state, dispatch] = useContext(Productname);
  
  let total = 0
  let totalPrice = 0
  return (
    <Container>
      <Container.Wrapper>
        <h1>Total Product Name : {state.mock.length}</h1>
      </Container.Wrapper>
      <Container.Fruits>
        {state.mock.map((value) => {
          total += value.quantity;
          totalPrice += value.quantity * value.price;
          return (
            <Container.Block key={value.id}>
              <Container.Checkbox
                type='checkbox'
               
              />
              <Container.Title>
                {value.name}
              </Container.Title>
              <Container.Title>${value.price}</Container.Title>
              <Container.Box>
                <Container.Btn onClick={() => dispatch({type:'delete',payload:{userId:value.id}})}>
                  <Container.Trash />
                </Container.Btn>
                <Container.Plus onClick={() => dispatch({type:'increment', payload:{userId:value.id}})} />
                <Container.Count>{value.quantity}</Container.Count>
                <Container.Minus onClick={() => dispatch({type:'decrement',payload:{userId:value.id}})} />
              </Container.Box>
            </Container.Block>
          );
        })}
        <Container.Price>
          <Container.Total>Total Price: ${totalPrice}</Container.Total>
          <Container.Total>Total: {total}</Container.Total>
        </Container.Price>
      </Container.Fruits>
    </Container>
  );
};

export default Products;
