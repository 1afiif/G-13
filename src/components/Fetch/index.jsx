import React, { useEffect,useState } from 'react';
// 21minut 2video //18 October
const Fetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method:'GET'
        })
        .then((response) => response.json())
        .then((response) => setData(response));
    },[])
    console.log(data, 'Data');
  return (
    <div>
      <h3>Fetch API</h3>
      {/* {
        data?.map((value) => {
       return(
        <div key={value?.id}>
          {value?.id} - {value?.name} - {value?.username}            
        </div>
       )        
    })
 }  */}
    </div>
  )
}

export default Fetch
