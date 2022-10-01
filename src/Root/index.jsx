import React, { Component } from 'react'
import Slider from '../components/Carousel'
import InputComp from '../components/InputComp'
import Navbar from '../components/Navbar'

class Root extends Component {
  render() {
    return (
      <>
        <Navbar /> 
        <InputComp />
        <Slider/>
      </>
    )
  }
}

export default Root
