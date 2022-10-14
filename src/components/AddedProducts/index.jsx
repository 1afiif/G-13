import React, { useContext } from 'react'
import { PlantApp } from '../../context'

const AddedProducts = () => {
  const [state] = useContext(PlantApp);
  
  return (
    <div style={{background:'red',padding:'0',margin:'0'}}>
     <h4>Added Products</h4>
     {
      state?.products?.map((value) => {
        console.log(state.products);
        return(
            <p>{value?.id} {value?.title} ${value.price} {value.quantity}</p>  
        )
      })
     }
    </div>
  )
}

export default AddedProducts