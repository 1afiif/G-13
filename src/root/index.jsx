import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Context from '../context'

const Root = () => {
  return (
    <>
      <Context>
        <Navbar />
        <Products />
      </Context>
    </>
  );
}

export default Root