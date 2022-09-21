import React from 'react'
import { Container } from './style'

class Button extends React.Component {
  render() {
    console.log(this);
    return (
      <Container>{this.props.children}
      </Container>
    )
  }
}
export default Button
