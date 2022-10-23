import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
        .then((response) => setData(response?.data));
    }, []);
    console.log(data, 'AxiosData');
  return (
    <div>
      {
       data?.map((value) => {
        return(
         <div key={value?.id}>
          {value?.id} - {value?.name} - {value?.username}
         </div>
        )
       })
      }
    </div>
  )
}

export default Axios
