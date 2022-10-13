import React from 'react'
import Products from '../components/Products'
import Context from '../context'

const Root = () => {
  return (
    <>
      <Context>
        <Products />
      </Context>
    </>
  );
}

export default Root