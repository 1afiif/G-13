import React, { useState } from 'react';
import { data } from '../../data';
import { Container } from './style';

const Products = () => {
  
  return (
    <Container>
      <Container.Wrapper>
        <Container.Input type={'text'} placeholder='Add an Item ...' />
        <Container.Icon />
      </Container.Wrapper>
      <Container.Fruits>
        {state.map((value) => {
          total += value.quantity;
          totalPrice += value.quantity * value.price;
          return (
            <Container.Block key={value.id}>
              <Container.Checkbox
                type='checkbox'
                onChange={(e) => OnChecked(e, value.id)}
              />
              <Container.Title check={value.id === ids ? check : 0}>
                {value.name}
              </Container.Title>
              <Container.Title>${value.price}</Container.Title>
              <Container.Box>
                <Container.Btn onClick={() => Delete(value.id)}>
                  <Container.Trash />
                </Container.Btn>
                <Container.Plus onClick={() => increment(value.id)} />
                <Container.Count>{value.quantity}</Container.Count>
                <Container.Minus onClick={() => decrement(value.id)} />
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
