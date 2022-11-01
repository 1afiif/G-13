import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../utils/data'

const ProductDetail = () => {
  const params = useParams();
    console.log(params.id.replace(':', ''));
    const filtered = data.filter((value) => value.id === +params.id.replace(':', ''));
    console.log(filtered, 'ff');
  return (
    <div style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
      <h1>ProductDetail</h1>
      {
        filtered.map(({id,title,description}) => {
          return(
              <div key={id}>  
                 {id} - {title} - {description} 
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductDetail
