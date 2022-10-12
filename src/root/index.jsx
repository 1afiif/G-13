import React from 'react'
import Context from '../context'
import Navbar from '../components/Navbar'
import UseContext from '../components/UseContext'

const Root = () => {
  return (
    <>
      <Context>
        <Navbar />
        <UseContext/>
      </Context>
    </>
  )
}

export default Root