import React, { Component } from 'react'
import { MainWrapper } from './style'

class Body extends Component {
  render() {
    return (
      <MainWrapper>
        <MainWrapper.NavWrap>
          <h1>My properties</h1>
          <input type='text' placeholder='Search' />
        </MainWrapper.NavWrap>
        <MainWrapper.Content>
          <MainWrapper.Header>
            <h1>Listing Title</h1>
            <MainWrapper.Header 
            style={{width:'58%',margin:'0em'}}>
              <h1>Data Published</h1>
              <h1>Status</h1>
              <h1>View</h1>
              <h1>Action</h1>
            </MainWrapper.Header>
          </MainWrapper.Header>
        </MainWrapper.Content>
      </MainWrapper>
    );
  }
}

export default Body