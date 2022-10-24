import React, { useEffect, useState } from 'react';

const Fetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://houzing-app.herokuapp.com/api/v1/houses/list', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          } 
        })
          .then((response) => response.json())
          .then((response) => setData(response?.data));
    },[])
    console.log(data, 'Data');
  return (
    <div>
      <h3>Fetch API</h3>
      {
        data?.map((value) => {
       return(
        <div key={value?.id}>
          {value?.id} - {value?.name} - {value?.address} - {value?.category?.name}           
          <img width={'300px'} src={value?.attachments[0].imgPath} alt="img" />
        </div>
       )        
    })
 } 
    </div>
  )
}

export default Fetch
