import React, { useContext } from 'react'
import { PlantApp } from '../../context'
import { Container, IconWrap,Btn } from './style';

const AddedProducts = () => {
  const [state] = useContext(PlantApp);
  
  return (
  <Container>
   <Container.Header>
    <h1>Products</h1>
   <Container.Header 
      style={{width:'58%',margin:'0em'}}>
      <h1>Price</h1>
      <h1>Quantity</h1>
      <h1>Total</h1>
    </Container.Header>
   </Container.Header>
   {
    state?.products?.map((value) => {
      return(
        <Container.Body key={value.id}>
         <Container.ImgContainer>
        <img src={value.img} alt=''/>  
        </Container.ImgContainer>
        <Container.TextContainer>
          <h1>{value.title}</h1>    
        </Container.TextContainer> 
        <Container.Body2>
        <h1>${value.price}.00</h1>
        <Container.IconWrap>
        <button><IconWrap.PlusIcon/></button>
        <h1 style={{color:'black'}}>{value.quantity}</h1>  
        <button><IconWrap.MinusIcon/></button>
        </Container.IconWrap>    
        <Container.IconWrap>
        <h1>${value.price}.00</h1>
        <button><IconWrap.DeleteIcon/></button>
        </Container.IconWrap>
        </Container.Body2>
        </Container.Body>
      )
    })
  }
  <Btn>Buy</Btn>
  </Container>
  )
}

export default AddedProducts