import React, { useContext } from 'react'
import { PlantApp } from '../../context'
import { Container } from './style';

const AddedProducts = () => {
  const [state] = useContext(PlantApp);
  
  return (
  <Container>
     <h4>Added Products</h4>
     {
      state?.products?.map((value) => {
        console.log(state.products);
        return(
            <p>{value?.id} {value?.title} ${value.price} {value.quantity}</p>  
        )
      })
     }
  </Container>
  )
}

export default AddedProducts