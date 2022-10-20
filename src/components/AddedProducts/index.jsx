import React, { useContext,useState } from 'react'
import { PlantApp } from '../../context'
import { Container, IconWrap,Btn } from './style';

const AddedProducts = () => {
  const [state, dispatch] = useContext(PlantApp);
  const initialText = 'Buy';
  const [btnText, setBtnText] = useState(initialText);

  const handleClick = () => {
    alert('Products Purchased');
    setBtnText('Loading...');

    setTimeout(() => {
      setBtnText(initialText);
    }, 1500);

  }
  let total = 0
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
    total += value?.price * value?.quantity
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
        <button onClick={() => dispatch({type:'increment',payload:{id:value.id}})}><IconWrap.PlusIcon/></button>
        <h1 style={{color:'black'}}>{value.quantity}</h1>  
        <button onClick={() => dispatch({type:'decrement',payload:{id:value.id}})}><IconWrap.MinusIcon/></button>
        </Container.IconWrap>    
        <Container.IconWrap>
        <h1>${value?.price}.00</h1>
        <button onClick={() => dispatch({type:'delete',payload:{id:value.id}})}><IconWrap.DeleteIcon/></button>
        </Container.IconWrap>
        </Container.Body2>
        </Container.Body>
      )
    })
      }
   <h1>Total Price: ${total}.00</h1>
  <Btn onClick={handleClick}>{btnText}</Btn>
  </Container>
  )
}

export default AddedProducts