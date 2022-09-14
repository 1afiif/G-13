import React from 'react'
import { Button, Wrapper } from './style'

class Body extends React.Component  {
  constructor(props) {
    super(props) 
    this.state = {
      counter:0,
    }
  }
  render() {
    const increment = () => {
     this.setState({counter:this.state.counter + 1})
    }
    const decrement = () => {
      if(this.state.counter > 0) 
      this.setState({ counter:this.state.counter - 1})
    }
    return (
      <Wrapper>
        <Button onClick={decrement}>-</Button>
        <h1>{this.state.counter}</h1>
        <Button onClick={increment}>+</Button>
      </Wrapper>
    )
  }
}
export default Body
