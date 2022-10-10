import React, { Component } from 'react'
import { MainWrapper } from './style'
import { data } from '../../data';

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      houzing: data,
      name: '',
      location: '',
      price:''
    }
  }
  render() {
    const Delete = (id) => {
     let result = this.state.houzing.filter((value) => value.id !== id);
     this.setState({houzing:result});
    }

    const editFunction = (id,name,location,price) => {
      this.setState({
        houzing: this.state.houzing.map((value) => ({
          id: value.id,
          img: value.img,
          info: {
            name: value.info.name,
            location: value.info.location,
            price: value.info.price,
          },
          date: value.date,
          status: value.status,
          view: value.view,
          hidden: value.id === id ? true : false,
        })),
      });
      this.setState({
        name: name,
        location: location,
        price:price
      })
    }

    const saveFunction = (id) => {
     this.setState({
       houzing: this.state.houzing.map((value) => ({
         id: value.id,
         img: value.img,
         info: {
           name: value.id === id ? this.state.name : value.info.name,
           location: value.id === id ? this.state.location : value.info.location,
           price: value.id === id ? this.state.price : value.info.price,
         },
         date: value.date,
         status: value.status,
         view: value.view,
         hidden:false,
       })),
     });
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
                    <MainWrapper.ImgContainer>
                      <img src={value.img} alt='' />
                    </MainWrapper.ImgContainer>
                    <MainWrapper.TextContainer>
                      <h1>
                        {value?.hidden ? (
                          <input type={'text'} value={this.state.name}
                            onChange={(e) => this.setState({name:e.target.value}) } />
                        ) : (
                          value?.info.name
                        )}
                      </h1>
                      <p>
                        {value?.hidden ? (
                          <input type={'text'} value={this.state.location}
                          onChange={(e) => this.setState({location:e.target.value}) } />
                        ) : (
                          value?.info?.location
                        )}
                      </p>
                      <h1>
                        {value?.hidden ? (
                          <input type={'text'} value={this.state.price}
                          onChange={(e) => this.setState({price:e.target.value}) } />
                        ) : (
                          value?.info?.price
                        )}
                      </h1>
                    </MainWrapper.TextContainer>
                    <MainWrapper.Body2>
                      <h1>{value.date}</h1>
                      <h1>{value.status}</h1>
                      <h1>{value.view}</h1>
                      <MainWrapper.IconWrap>
                          {value.hidden ? (
                            <button onClick={() => saveFunction(value.id)}><MainWrapper.SaveIcon /></button>
                          ) : (
                            <button onClick={() =>
                              editFunction(value.id, value.info.name, value.info.location, value.info.price)}>
                              <MainWrapper.EdIcon />
                            </button>
                          )}
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