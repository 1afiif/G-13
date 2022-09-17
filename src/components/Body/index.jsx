import React, { Component } from 'react'
import { BodyContainer, Input, MainContainer, PropertyContainer, TextContainer, Wrapper } from './style';
import Data from '../../data';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      houzing:Data,
    }
  }

  render() {
    const onChange = (e) => {
      let result = Data.filter(({ id, info }) => info.name.toLowerCase().includes(e.target?.value));
      this.setState({ houzing: result });
    }
    return (
      <>
        <TextContainer>
          <Input
            type='text'
            onChange={onChange}
            placeholder='Enter an address, neighborhood, city, or ZIP code'
          />
          <h1>Properties</h1>
          <p style={{ color: '#696969', fontStretch: 'ultra-expanded' }}>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </TextContainer>
        <MainContainer>
          {this.state.houzing.map((value) => {
            return (
              <BodyContainer>
                <img src={value?.img} alt='' />
                <Wrapper>
                  <p>{value.info.name}</p>
                  <p style={{ color: '#696969' }}>{value.info.location}</p>
                </Wrapper>
                <PropertyContainer>
                  <p>{value.info.property.bed} Beds</p>
                  <p>{value.info.property.bath} Baths</p>
                  <p>{value.info.property.garage} Garage</p>
                  <p>{value.info.property.area}</p>
                </PropertyContainer>
              </BodyContainer>
            );
          })}
        </MainContainer>
      </>
    );
  }
}

export default Body
