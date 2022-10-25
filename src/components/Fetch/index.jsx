import React, { useEffect, useState } from 'react';

const Fetch = () => {
 const [data, setData] = useState([]);
 
 async function fetchData() {
     await fetch('https://houzing-app.herokuapp.com/api/v1/houses/list', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((response) => setData(response?.data));
    }
    useEffect(() => {
      fetchData();
    }, [])
   
  const houseDelete = (id) => {
    localStorage.setItem('delete', id);
    fetchData();
  }
  return (
    <div>
      <h3>Fetch API</h3>
      {
        data?.map((value) => {
       return(
        <div key={value?.id}>
          {value?.id} - {value?.name} - {value?.address} - {value?.category?.name}           
           <img width={'300px'} src={value?.attachments[0].imgPath} alt="img" />
           <button onClick={() => houseDelete(value.id)}>Delete {value.id}</button>
        </div>
       )        
    })
 } 
    </div>
  )
}

export default Fetch
