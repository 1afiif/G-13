import React, { Component } from 'react'
import InputComp from '../components/InputComp'
import Navbar from '../components/Navbar'

class Root extends Component {
  render() {
    return (
      <>
        <Navbar /> 
        <InputComp/>
      </>
    )
  }
}

export default Root
