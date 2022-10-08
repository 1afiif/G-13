import React, { useState, useEffect } from 'react';
import { Container } from './style';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('useEffect working 2 ...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(data, 'data');
  }, [toggle]);

  useEffect(() => {
    console.log('useEffect working 3 ...');
  }, [count]);
  return (
    <Container>
      <h2>useEffect</h2>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setToggle(!toggle)}>Get Data</button>
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Street</th>
          <th>Zipcode</th>
          <th>LAT</th>
          <th>LNG</th>
          <th>Website</th>
        </thead>
        <tbody>
          {data?.map((value) => {
            return (
              <tr key={value?.id}>
                <td>{value?.id}</td>
                <td>{value?.name}</td>
                <td>{value?.username}</td>
                <td>{value?.email}</td>
                <td>{value?.phone}</td>
                <td>{value?.address?.city}</td>
                <td>{value?.address?.street}</td>
                <td>{value?.address?.zipcode}</td>
                <td>{value?.address?.geo?.lat}</td>
                <td>{value?.address?.geo?.lng}</td>
                <td>{value?.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default UseEffect;
