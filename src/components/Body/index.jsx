import React, { Component } from 'react'
import { MainWrapper } from './style'
import { data } from '../../data';

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
        houzing:data
    }
  }
  render() {
    const Delete = (id) => {
     let result = this.state.houzing.filter((value) => value.id !== id);
     this.setState({houzing:result});
    }
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
          {
                    this.state.houzing.map((value) => {
                return (
                  <MainWrapper.Body key={value.id}>
                    <div>Img</div>
                    <MainWrapper.Body2>
                      <h1>{value.date}</h1>
                      <h1>{value.status}</h1>
                      <h1>{value.view}</h1>
                      <MainWrapper.IconWrap>
                        <button>
                          <MainWrapper.EdIcon />
                        </button>
                        <button onClick={() => Delete(value.id)}>
                          <MainWrapper.DelIcon />
                        </button>
                      </MainWrapper.IconWrap>
                    </MainWrapper.Body2>
                  </MainWrapper.Body>
                );
            })
          }
        </MainWrapper.Content>
      </MainWrapper>
    );
  }
}

export default Body