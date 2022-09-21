import React from 'react'
import { Container } from './style'

class Button extends React.Component {
  render() {
    return (
      <Container>{this.props.children}
      </Container>
    )
  }
}
export default Button
