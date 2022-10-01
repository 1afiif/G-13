import React, { Component } from 'react'
import { Addres, Block, Input, Searc} from './style'

class InputComp extends Component {
  render() {
    return (
      <Block>
        <Addres />
        <Input
          type='text'
          style={{ width: '527px' }}
          placeholder='Enter an address, neighborhood,city, or ZIP code'
        />
        <Input type={'text'} style={{ width: '131px' }} />
        <Input style={{ width: '131px' }} type={'text'} placeholder='Price' />
        <Input
          style={{ width: '131px' }}
          type={'text'}
          placeholder='Advanced'
            />
            <button><Searc/>Search</button>
      </Block>
    );
  }
}

export default InputComp
